'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faUser } from '@fortawesome/free-solid-svg-icons';
import MainDashboard from './MainDashboard';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const NavBar = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;

  const [providers, setProviders] = useState(false);

  useEffect(() => {
    const setAuthProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setAuthProviders();
  }, []);

  return (
    <nav className='w-72 h-auto ml-24 bg-blue-900 py-10 shadow-md flex flex-col items-center'>
      <Link
        href='/'
        className='text-white font-bold text-5xl mb-10 bebas-neue-regular'
      >
        Media Library
      </Link>
      <MainDashboard />
      <div className='mt-auto flex flex-row items-center  mb-24 gap-6'>
        {session && (
          <>
            <Link href='/wishlist'>
              <div className='w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold transition duration-300 hover:bg-gray-200'>
                <FontAwesomeIcon icon={faList} />
              </div>
            </Link>
            <Link href='/profile'>
              <div className='w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold transition duration-300 hover:bg-gray-200'>
                {profileImage ? (
                  <Image
                    className='h-10 w-10 rounded-full border-blue-300 border-2'
                    src={profileImage}
                    width={40}
                    height={40}
                    alt='profile picture'
                  />
                ) : (
                  <FontAwesomeIcon icon={faUser} />
                )}
              </div>
            </Link>
          </>
        )}
        {!session && (
          <div className='flex items-center'>
            {providers &&
              Object.values(providers).map((provider, index) => (
                <button
                  onClick={() => signIn(provider.id)}
                  key={index}
                  className='flex gap-2 items-center rounded-lg bg-blue-500 px-4 py-2'
                >
                  <FaGoogle className='text-white' />
                  <span className='text-white'>Login or Register</span>
                </button>
              ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
