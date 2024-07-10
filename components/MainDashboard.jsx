'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGamepad,
  faDiceFive,
  faBook,
  faClapperboard,
  faHeadphones,
  faCommentDots,
  faPlus,
  faLibrary,
} from '@fortawesome/free-solid-svg-icons';

const MainDashboard = () => {
  const router = useRouter();

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value) {
      router.push(`/${value}/add-new`);
    }
  };

  const buttons = [
    { icon: faBook, label: 'Books', href: '/books' },
    { icon: faGamepad, label: 'Games', href: '/video-games' },
    { icon: faDiceFive, label: 'Boardgames', href: '/boardgames' },
    { icon: faClapperboard, label: 'Movies', href: '/movies' },
    { icon: faHeadphones, label: 'Audiobooks', href: '/audiobooks' },
    { icon: faCommentDots, label: 'Comics', href: '/comics' },
  ];

  return (
    <div className='flex flex-col items-center py-8 space-y-4'>
      {buttons.map((button, index) => (
        <div key={index} className='flex justify-start items-center'>
          <Link
            href={button.href}
            className=' flex flex-row group w-60 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition duration-300 transform hover:scale-105 shadow-lg text-white rounded-xl  items-center justify-between gap-4 pl-4'
          >
            <FontAwesomeIcon icon={button.icon} size='2x' />
            <span className='mt-2  text-s pr-8'>{button.label}</span>
          </Link>
        </div>
      ))}
      {/* <div className='w-full flex justify-start items-center px-4 lg:px-60 mt-10'>
        <div className='relative'>
          <select
            onChange={handleSelectChange}
            className='appearance-none bg-gray-700 text-white py-2 pl-3 pr-8 lg:pr-20 rounded-lg text-start cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
            defaultValue=''
          >
            <option value='' disabled hidden>
              ADD NEW
            </option>
            <option value='books'>Book</option>
            <option value='video-games'>Video Game</option>
            <option value='board-games'>Board Game</option>
            <option value='movies'>Movie</option>
            <option value='audiobooks'>Audiobook</option>
            <option value='comics'>Comic</option>
          </select>
        </div>
      </div> */}
    </div>
  );
};

export default MainDashboard;
