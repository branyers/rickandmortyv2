import magnifier from '../assets/magnifier.svg';
import branros from '../assets/branros.jpeg';
import Footer from './Footer';

const Main = () => {
    return (
        <main className='mt-16'>
            <section className="text-center">
                <h1 className='text-6xl font-bold'>The Rick and Morty API</h1>
            </section>

            <section className='mx-auto mt-10 mb-16'>
                <div className="flex justify-center items-center gap-2">
                    <div className="w-1/2 border rounded-md">
                        <input className='w-full py-1 px-2 rounded-md' type="text" />
                    </div>
                    <img className='w-5 h-5' src={magnifier} alt="" />
                </div>
            </section>

            <section className="bg-slate-800 p-8 md:flex lg:flex md:flex-grow md:flex-wrap">
                <div className='bg-slate-600 flex flex-col md:flex md:flex-row lg:flex-row rounded-md mb-10 md:mx-auto'>
                    <img className='md:w-2/6 lg:md:w-2/6' src={branros} alt="" />

                    <div className='md:flex md:flex-col lg:flex md:px-2 lg:px-2 md:justify-evenly'>
                        <div className='flex flex-col gap-2  px-2 md:flex-col lg:flex-col mt-2'>
                            <p className='text-2xl text-white font-bold'>Baby Wizard</p>
                            <div className='flex items-center gap-1 mb-5 md:m-0 lg:m-0'>
                                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                <p className='text-white'>Dead - Alien </p>
                            </div>
                            <div className='flex flex-col px-2 py-3 '>
                                <p className='text-gray-400'>Last known location:</p>
                                <p className='text-white'>Earth (Replacement Dimension)</p>
                                <div className='mt-5'>
                                    <p className='text-gray-400'>First seen in:</p>
                                    <p className='text-white'>Total Rickall</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='bg-slate-600 flex flex-col md:flex md:flex-row lg:flex-row rounded-md mb-10 md:mx-auto'>
                    <img className='md:w-2/6 lg:md:w-2/6' src="https://rickandmortyapi.com/api/character/avatar/31.jpeg" alt="" />

                    <div className='md:flex md:flex-col lg:flex md:px-2 lg:px-2 md:justify-evenly'>
                        <div className='flex flex-col gap-2  px-2 md:flex-col lg:flex-col mt-2'>
                            <p className='text-2xl text-white font-bold'>Baby Wizard</p>
                            <div className='flex items-center gap-1 mb-5 md:m-0 lg:m-0'>
                                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                <p className='text-white'>Dead - Alien </p>
                            </div>
                            <div className='flex flex-col px-2 py-3 '>
                                <p className='text-gray-400'>Last known location:</p>
                                <p className='text-white'>Earth (Replacement Dimension)</p>
                                <div className='mt-5'>
                                    <p className='text-gray-400'>First seen in:</p>
                                    <p className='text-white'>Total Rickall</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='bg-slate-600 flex flex-col md:flex md:flex-row lg:flex-row rounded-md mb-10 md:mx-auto'>
                    <img className='md:w-2/6 lg:md:w-2/6' src="https://rickandmortyapi.com/api/character/avatar/31.jpeg" alt="" />

                    <div className='md:flex md:flex-col lg:flex md:px-2 lg:px-2 md:justify-evenly'>
                        <div className='flex flex-col gap-2  px-2 md:flex-col lg:flex-col mt-2'>
                            <p className='text-2xl text-white font-bold'>Baby Wizard</p>
                            <div className='flex items-center gap-1 mb-5 md:m-0 lg:m-0'>
                                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                <p className='text-white'>Dead - Alien </p>
                            </div>
                            <div className='flex flex-col px-2 py-3 '>
                                <p className='text-gray-400'>Last known location:</p>
                                <p className='text-white'>Earth (Replacement Dimension)</p>
                                <div className='mt-5'>
                                    <p className='text-gray-400'>First seen in:</p>
                                    <p className='text-white'>Total Rickall</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='bg-slate-600 flex flex-col md:flex md:flex-row lg:flex-row rounded-md mb-10 md:mx-auto'>
                    <img className='md:w-2/6 lg:md:w-2/6' src="https://rickandmortyapi.com/api/character/avatar/31.jpeg" alt="" />

                    <div className='md:flex md:flex-col lg:flex md:px-2 lg:px-2 md:justify-evenly'>
                        <div className='flex flex-col gap-2  px-2 md:flex-col lg:flex-col mt-2'>
                            <p className='text-2xl text-white font-bold'>Baby Wizard</p>
                            <div className='flex items-center gap-1 mb-5 md:m-0 lg:m-0'>
                                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                <p className='text-white'>Dead - Alien </p>
                            </div>
                            <div className='flex flex-col px-2 py-3 '>
                                <p className='text-gray-400'>Last known location:</p>
                                <p className='text-white'>Earth (Replacement Dimension)</p>
                                <div className='mt-5'>
                                    <p className='text-gray-400'>First seen in:</p>
                                    <p className='text-white'>Total Rickall</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='bg-slate-600 flex flex-col md:flex md:flex-row lg:flex-row rounded-md mb-10 md:mx-auto'>
                    <img className='md:w-2/6 lg:md:w-2/6' src="https://rickandmortyapi.com/api/character/avatar/31.jpeg" alt="" />

                    <div className='md:flex md:flex-col lg:flex md:px-2 lg:px-2 md:justify-evenly'>
                        <div className='flex flex-col gap-2  px-2 md:flex-col lg:flex-col mt-2'>
                            <p className='text-2xl text-white font-bold'>Baby Wizard</p>
                            <div className='flex items-center gap-1 mb-5 md:m-0 lg:m-0'>
                                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                <p className='text-white'>Dead - Alien </p>
                            </div>
                            <div className='flex flex-col px-2 py-3 '>
                                <p className='text-gray-400'>Last known location:</p>
                                <p className='text-white'>Earth (Replacement Dimension)</p>
                                <div className='mt-5'>
                                    <p className='text-gray-400'>First seen in:</p>
                                    <p className='text-white'>Total Rickall</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='bg-slate-600 flex flex-col md:flex md:flex-row lg:flex-row rounded-md mb-10 md:mx-auto'>
                    <img className='md:w-2/6 lg:md:w-2/6' src="https://rickandmortyapi.com/api/character/avatar/31.jpeg" alt="" />

                    <div className='md:flex md:flex-col lg:flex md:px-2 lg:px-2 md:justify-evenly'>
                        <div className='flex flex-col gap-2  px-2 md:flex-col lg:flex-col mt-2'>
                            <p className='text-2xl text-white font-bold'>Baby Wizard</p>
                            <div className='flex items-center gap-1 mb-5 md:m-0 lg:m-0'>
                                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                <p className='text-white'>Dead - Alien </p>
                            </div>
                            <div className='flex flex-col px-2 py-3 '>
                                <p className='text-gray-400'>Last known location:</p>
                                <p className='text-white'>Earth (Replacement Dimension)</p>
                                <div className='mt-5'>
                                    <p className='text-gray-400'>First seen in:</p>
                                    <p className='text-white'>Total Rickall</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}


export default Main;