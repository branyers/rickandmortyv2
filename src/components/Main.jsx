import React, { useCallback, useState } from 'react';
import magnifier from '../assets/magnifier.svg';
import { Loading } from './Loading';
import Footer from './Footer';
import { useCharacter } from '../hooks/useCharacter';
import { getRandomCharacter } from '../../services/getRandomCharacter';
import { Filters } from './Filters';
import { useContext } from 'react';
import { FiltersContext } from '../Context/FilterContext';
import debounce from "just-debounce-it";
import { CharactersContainer } from './CharactersContainer';
import { useSearch } from '../hooks/useSearch';
import { useLocation } from 'react-router-dom';
import { TestComponent } from './TestComponent';

export const Main = () => {
    const location = useLocation()
    
    const { Searching, setSearching } = useSearch()
    const baseSearch = Searching ? Searching : '';

    const [search, setSearch] = useState(baseSearch)
    const [short, setShort] = useState()
    const { shortedCharacter, loading, getCharact } = useCharacter({ search, short })
    const { filters } = useContext(FiltersContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        getCharact({ searching: search, species: filters });
    }

    const debouncedGeCharacter = useCallback(
        debounce(searching => {
            getCharact({ searching: searching, species: filters })
        }, 300)
        , [getCharact]
    )

    const handleChange = (event) => {
        const newSearch = event.target.value
        setSearch(newSearch)
        setSearching(newSearch)
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
                    <input placeholder='Write the name about your favorite character...' className='w-full py-1 px-2 rounded-md border' value={baseSearch} type="text" onChange={handleChange} />
                    <button type='submit'><img className='w-5 h-5' src={magnifier} alt="" /></button>
                </form>

                <input type="checkbox" onClick={handleCheckbox} name="Ordenar por nombre" />
                <label htmlFor="">Ordenar Por nombre</label>
                <Filters />
                <TestComponent/>
            </section>
            <section className="bg-slate-800 p-8 md:flex lg:flex md:flex-wrap flex-grow-0 gap-2 justify-center">
                {
                    loading
                        ? (
                            <Loading />

                        ) :
                        <CharactersContainer shortedCharacter={shortedCharacter} />



                }







            </section>


            <Footer />
        </main>

    )
}


