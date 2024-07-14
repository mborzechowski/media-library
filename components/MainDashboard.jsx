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
    { icon: faBook, label: 'BOOKS', href: '/books' },
    { icon: faGamepad, label: 'GAMES', href: '/video-games' },
    { icon: faDiceFive, label: 'BOARDGAMES', href: '/boardgames' },
    { icon: faClapperboard, label: 'MOVIES', href: '/movies' },
    { icon: faHeadphones, label: 'AUDIOBOOKS', href: '/audiobooks' },
    { icon: faCommentDots, label: 'COMICS', href: '/comics' },
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
            <span className='text-s pr-8'>{button.label}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MainDashboard;
