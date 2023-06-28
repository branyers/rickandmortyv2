import netly from '../assets/netly.svg';
import Incident from '../assets/incident-icon.svg';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';
import heart from '../assets/heart.svg';

const Footer = () => {
    return (
        <>
            <footer className="bg-footer_Color py-20">
                <section className='flex flex-col'>
                    <ul className="flex justify-between md:justify-center lg:justify-center md:gap-10 text-white text-sm mb-3">
                        <li>CHARACTERS: 826</li>
                        <li>LOCATIONS: 128</li>
                        <li>EPISODES: 51</li>
                    </ul>
                    <div className="flex items-center justify-center gap-2 mb-5">
                        <p className="self-center text-sm text-white">SERVER STATUS</p>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    </div>

                    <div className='flex justify-evenly items-center mb-7 md:justify-center lg:justify-center md:gap-10'>
                        <img className='w-32' src={netly} alt="" />
                        <img className='w-10' src={Incident} alt="" />
                    </div>

                    <div className='flex justify-evenly mb-6 md:justify-center lg:justify-center md:gap-10'>
                        <img className='stroke-stone-50' src={github} alt="" />
                        <img src={twitter} alt="" />
                        <img src={heart} alt="" />
                    </div>

                    <div className='flex items-center justify-center gap-2 '>
                        <p className='border-b border-yellow-600 text-sm text-white font-bold'>By Branyes Nunez A.</p>
                        <span className='text-sm text-white'>2023</span>
                    </div>

                </section>
            </footer>
        </>
    )
}

export default Footer;