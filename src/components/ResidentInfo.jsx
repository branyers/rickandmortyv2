import React from "react"
import { useParams } from "react-router-dom"
import { useLocations } from "../hooks/useLocations"
import { useLocationInfo } from "../hooks/useLocationInfo"

export const ResidentInfo = () => {
    const {id} = useParams()
    const {dataResident} = useLocationInfo(id)

    return (
        <section className="bg-slate-800 p-8 md:flex lg:flex md:flex-wrap flex-grow-0 gap-2 justify-center">
            {
                dataResident && dataResident.map(({ id, name, image, status, species, origin, episode }) => {
                    return <React.Fragment key={id}>
                        <div className='bg-slate-600 container md:flex md:gap-1 md:mx-auto md:w-4/12 rounded-md mb-5'>
                            <img className='w-full md:w-1/3 object-cover' src={image} alt="" />
                            <div className='md:flex md:flex-col lg:flex md:px-2 lg:px-2 md:justify-evenly'>
                                <div className='flex flex-col gap-2  px-2 md:flex-col lg:flex-col mt-2'>
                                    <p className='text-2xl text-white font-bold hover:text-yellow-400'>{name}</p>
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
            }
        </section>
    );

}