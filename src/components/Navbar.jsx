import bluecloud from '../assets/icons8-cloud-50.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="bg-[#0a192f] w-full p-3 flex justify-center">
           <div className='absolute top-0 left-0 m-2'>
                <Link to='/'>
                <img src={bluecloud} alt="blue-cloud" className='w-10' />
                </Link>
           </div>
            <div className='flex space-x-7  text-sky-400 text-md sm:text-lg'>
                <Link to='/about' className="hover:text-white">About</Link>
                <Link to='/contact' className="hover:text-white">Contact</Link>
            </div>
        </div>
     );
}
 
export default Navbar;