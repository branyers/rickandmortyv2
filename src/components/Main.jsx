import React, { useCallback, useState } from 'react';
import magnifier from '../assets/magnifier.svg';
import { Loading } from './Loading';
import Footer from './Footer';
import { useCharacter } from '../hooks/useCharacter';
import { getRandomCharacter } from '../../services/getRandomCharacter';
import { Filters } from './Filters';
import { TestComponent } from './TestComponent';
import { useContext } from 'react';
import { FiltersContext } from '../Context/FilterContext';
import debounce from "just-debounce-it";

export const Main = () => {
    const [search, setSearch] = useState(getRandomCharacter)
    const [short, setShort] = useState()
    const { shortedCharacter, loading, getCharact} = useCharacter({search, short})
    const {filters} = useContext(FiltersContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        getCharact({ searching: search, species: filters});
    }

    const debouncedGeCharacter = useCallback(
        debounce(searching => {
            getCharact({ searching: searching,species: filters})
        }, 300)
        , [getCharact]
      )

    const handleChange = (event) => {
        const newSearch = event.target.value
        setSearch(newSearch)
        debouncedGeCharacter(newSearch)
    }

    const handleCheckbox = () => {
        setShort(!short)
    }

    return (
        <main className='mt-16'>
            <section className="text-center">
                <h1 className='text-6xl font-bold'>The Rick and Morty API</h1>
            </section>

            <section className='mx-auto mt-10 mb-16 flex items-center justify-center gap-2'>
                    <form className="w-1/2 rounded-md flex items-center gap-2" onSubmit={handleSubmit}>
                        <input className='w-full py-1 px-2 rounded-md border' type="text" onChange={handleChange}/>
                        <button type='submit'><img className='w-5 h-5' src={magnifier} alt=""/></button>
                    </form>

                    <input type="checkbox" onClick={handleCheckbox} name="Ordenar por nombre" />
                    <label htmlFor="">Ordenar Por nombre</label>
                    <Filters/>
            </section>
                <TestComponent/>
            <section className="bg-slate-800 p-8 md:flex lg:flex md:flex-wrap flex-grow-0 gap-2 justify-center">
               
                {
                    loading
                        ? (
                            <Loading/>
                            
                        ) :
                        (
                            shortedCharacter && shortedCharacter.map(({ id, name, image, status, species, origin, episode}) => {
                                return <React.Fragment key={id}>
                                    <div className='bg-slate-600 container md:flex md:gap-1 md:mx-auto md:w-4/12 rounded-md mb-5'>
                                        <img className='w-full md:w-1/3 object-cover' src={image} alt="" />
                                        <div className='md:flex md:flex-col lg:flex md:px-2 lg:px-2 md:justify-evenly'>
                                            <div className='flex flex-col gap-2  px-2 md:flex-col lg:flex-col mt-2'>
                                                <p className='text-2xl text-white font-bold'>{name}</p>
                                                <div className='flex items-center gap-1 mb-5 md:m-0 lg:m-0'>
                                                    <span className={`w-3 h-3 rounded-full ${status === 'Alive' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                                    <p className='text-white'>{status} - {species} </p>
                                                </div>
                                                <div className='flex flex-col px-2 py-3 '>
                                                    <p className='text-gray-400'>Last known location:</p>
                                                    <p className='text-white'>{origin.name}</p>
                                                    <div className='mt-5'>
                                                        <p className='text-gray-400'>Episodes:</p>
                                                        <p className='text-white'>{episode.length}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            })

                        )
                }

            </section>


            <Footer />
        </main>
    )
}


