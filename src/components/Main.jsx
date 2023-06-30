import React, { useState} from 'react';
import magnifier from '../assets/magnifier.svg';
import load from '../assets/loading.gif';
import Footer from './Footer';
import { useCharacter } from '../hooks/useCharacter';
import { getRandomCharacter } from '../../services/getRandomCharacter';

const Main = ({onNewValue}) => {
    const [search, setSearch] = useState(getRandomCharacter)
    const {character, loading} = useCharacter({search})

    return (
        <main className='mt-16'>
            <section className="text-center">
                <h1 className='text-6xl font-bold'>The Rick and Morty API</h1>
            </section>

            <section className='mx-auto mt-10 mb-16'>
                <div className="flex justify-center items-center gap-2">
                    <div className="w-1/2 border rounded-md">
                        <input className='w-full py-1 px-2 rounded-md' type="text" onChange={((event) => {setSearch(event.target.value)})} />
                    </div>
                    <img className='w-5 h-5' src={magnifier} alt="" />
                </div>
            </section>

            <section className="bg-slate-800 p-8 md:flex lg:flex md:flex-wrap flex-grow-0 gap-2">
                { loading ? <img src={load}/> :character && character.map(({ id, name, image, status, species, origin }) => {
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
                                                <p className='text-gray-400'>First seen in:</p>
                                                <p className='text-white'>Total Rickall</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </React.Fragment>
                })}
            </section>


            <Footer  />
        </main>
    )
}


export default Main;