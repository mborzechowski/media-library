import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faUser } from '@fortawesome/free-solid-svg-icons';
import MainDashboard from './MainDashboard';

const NavBar = () => {
  return (
    <nav className='w-72 h-auto ml-24 bg-blue-900 py-10 shadow-md flex flex-col items-center'>
      <Link href='/' className='text-white font-bold text-2xl mb-10'>
        Media Library
      </Link>
      <MainDashboard />
      <div className='mt-auto flex flex-row items-center  mb-24 gap-6'>
        <Link href='/wishlist'>
          <div className='w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold transition duration-300 hover:bg-gray-200'>
            <FontAwesomeIcon icon={faList} />
          </div>
        </Link>
        <Link href='/profile'>
          <div className='w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold transition duration-300 hover:bg-gray-200'>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
