'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GamesLibrary = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:8080/games');
        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!games) {
    return <h1 className='text-center text-xl m-4'>No Games Found</h1>;
  }
  return (
    <div className='pt-8 flex flex-col items-start gap-16'>
      <h1 className='font-bold text-2xl mt-2 ml-12'>Game</h1>

      <div className='w-full max-w-screen-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 gap-8 px-4 md:px-10 '>
        <div className='m-2 border bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-md w-24 h-24 flex items-center justify-center overflow-hidden text-white'>
          <Link
            href={`/video-games/add-new`}
            className='w-24 h-24 flex items-center justify-center overflow-hidden'
          >
            ADD NEW
          </Link>
        </div>
        {games.map((game) => (
          <div
            key={game.id}
            className='m-2 border border-gray-300 rounded-md w-24 h-24 flex items-center justify-center overflow-hidden hover:scale-95'
          >
            {game.images ? (
              <Link
                href={`/video-games/${game.id}`}
                className='w-24 h-24 flex items-center justify-center overflow-hidden'
              >
                <Image
                  src={game.images[0]}
                  alt=''
                  width={80}
                  height={80}
                  className='object-cover w-full h-full '
                />
              </Link>
            ) : (
              <Link href={`/video-games/${game.id}`}>{game.title}</Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesLibrary;
