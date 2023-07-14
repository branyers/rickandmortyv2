import { Link } from 'react-router-dom';
import logo from '../assets/rickandmorty.svg';

const NavBar = () => {
    return (
        <header className='border-b border-gray-100 py-2 px-2'>
            <nav className='flex justify-between items-center'>

                <section>
                    <img width={`40px`} height={`40px`} src={logo} alt="" />
                </section>

                <section className='flex justify-center items-center'>
                    <ul className='flex items-center justify-center gap-3 font-bold'>
                        <Link to={'/'}>Home</Link>
                        <li>About</li>
                    </ul>
                </section>
            </nav>
        </header>
    );
}

export default NavBar;