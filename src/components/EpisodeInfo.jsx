import { useLocations } from "../hooks/useLocations"
import { Link, useParams, NavLink } from "react-router-dom"


export const EpisodeInfo = () => {
    const { id } = useParams()
    const { episodes } = useLocations(id)


    return (
        <section className="bg-slate-800 p-8 md:flex lg:flex md:flex-wrap flex-grow-0 gap-2 justify-center">
            {
                episodes && episodes.slice(0, 6).map(({id ,name, episode}) => (

                    <div key={name} className='bg-slate-600 container md:flex md:gap-1 md:mx-auto md:w-4/12 rounded-md mb-5'>
                        <div className='md:flex md:flex-col lg:flex md:px-2 lg:px-2 md:justify-evenly'>
                            <div className='flex flex-col gap-2  px-2 md:flex-col lg:flex-col mt-2'>
                                <div className='flex flex-col px-2 py-3 '>
                                    <p className='text-gray-400'>Episode Name:</p>
                                    <NavLink to={`/locationinfo/${id}`} state={{id}}><p className='text-white hover:text-gray-200'>{name}</p></NavLink>
                                    <div className='mt-5'>
                                        <p className='text-gray-400'>Episode Number:</p>
                                        <p className='text-white'>{episode}</p>
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