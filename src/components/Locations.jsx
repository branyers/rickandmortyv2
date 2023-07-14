import { useLocations } from "../hooks/useLocations"
import { Link, useParams, NavLink } from "react-router-dom"
export const Locations = () => {
    const { id } = useParams()
    const { episodes } = useLocations(id)


    return (
        <section className="bg-slate-800 p-8 md:flex lg:flex md:flex-wrap flex-grow-0 gap-2 justify-center">
            {
                episodes && episodes.slice(0, 6).map((location) => (
                    <div key={location.name} className='bg-slate-600 container md:flex md:gap-1 md:mx-auto md:w-4/12 rounded-md mb-5'>
                        <img className='w-full md:w-1/3 object-cover' alt="" />
                        <div className='md:flex md:flex-col lg:flex md:px-2 lg:px-2 md:justify-evenly'>
                            <div className='flex flex-col gap-2  px-2 md:flex-col lg:flex-col mt-2'>
                                <p className='text-2xl text-white font-bold'></p>
                                <div className='flex items-center gap-1 mb-5 md:m-0 lg:m-0'>
                                    <span className={`w-3 h-3 rounded-full === 'Alive' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    <p className='text-white'> </p>
                                </div>
                                <div className='flex flex-col px-2 py-3 '>
                                    <p className='text-gray-400'>Location Name:</p>
                                    <NavLink to={`/locationinfo/${id}`} state={{id}}><p className='text-white hover:text-gray-200'>{episodes.name}</p></NavLink>
                                    <div className='mt-5'>
                                        <p className='text-gray-400'>Episodes:</p>
                                        <p className='text-white'>{episodes.episode}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))

            }
        </section>
    )

}