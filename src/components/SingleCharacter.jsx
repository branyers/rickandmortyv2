import { Link, useParams, NavLink } from "react-router-dom"
import { useLocations } from "../hooks/useLocations"


export const SingleCharacter = () => {
    const { id } = useParams()
    const { data } = useLocations(id)

    return (
        <section className="bg-slate-800 p-8 md:flex lg:flex md:flex-wrap flex-grow-0 gap-2 justify-center">
            {data && <div className='bg-slate-600 container md:flex md:gap-1 md:mx-auto md:w-4/12 rounded-md mb-5'>
                <img className='w-full md:w-1/3 object-cover' src={data.image} alt="" />
                <div className='md:flex md:flex-col lg:flex md:px-2 lg:px-2 md:justify-evenly'>
                    <div className='flex flex-col gap-2  px-2 md:flex-col lg:flex-col mt-2'>
                        <p className='text-2xl text-white font-bold'>{data.name}</p>
                        <div className='flex items-center gap-1 mb-5 md:m-0 lg:m-0'>
                            <span className={`w-3 h-3 rounded-full ${data.status === 'Alive' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            <p className='text-white'>{data.status} - {data.species} </p>
                        </div>
                        <div className='flex flex-col px-2 py-3 '>
                            <p className='text-gray-400'>Last known location:</p>
                            <NavLink to={"/"}><p className='text-white hover:text-gray-200'>{data.origin.name}</p></NavLink>
                            <div className='mt-5'>
                                <p className='text-gray-400'>Episodes:</p>
                                <NavLink to={`/episodeinfo/${id}`}><p className='text-white'>All Episodes</p></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            }
        </section>
    )
}