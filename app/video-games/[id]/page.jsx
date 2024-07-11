'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const GamePage = () => {
  const { id } = useParams();

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameData = async () => {
      if (!id) return;
      try {
        const response = await fetch(`http://localhost:8080/games/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch game data');
        }
        const gameData = await response.json();
        setGame(gameData);
      } catch (error) {
        console.error('Error fetching game:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchGameData();
    }
  }, [id]);

  if (!game && !loading) {
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>Game Not Found</h1>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='max-w-4xl mx-auto p-4 mt-36 bg-white shadow-lg rounded-lg flex flex-col'>
      <div className='flex flex-row'>
        <div className='w-2/3 pr-6'>
          <h1 className='text-2xl font-bold mb-4'>{game.title}</h1>
          <p className='text-gray-700 mb-2'>
            <strong>Genre:</strong> {game.genre}
          </p>
          <p className='text-gray-700 mb-2'>
            <strong>Platform:</strong> {game.platform}
          </p>
          <p className='text-gray-700 mb-2'>
            <strong>Year Published:</strong> {game.yearPublished}
          </p>
          <p className='text-gray-700 mb-2'>
            <strong>Physical/Digital:</strong> {game.physicalDigital}
          </p>
          <p className='text-gray-700 mb-2'>
            <strong>Publisher:</strong> {game.publisher}
          </p>
          <p className='text-gray-700 mb-2'>
            <strong>Developer:</strong> {game.developer}
          </p>
          <p className='text-gray-700 mb-2'>
            <strong>Completed:</strong> {game.completed ? 'Yes' : 'No'}
          </p>
          <p className='text-gray-700 mb-2'>
            <strong>Rating:</strong> {game.rating}
          </p>
        </div>

        <div className='w-1/3'>
          <img
            src={game.images[0]}
            alt={`${game.title} cover`}
            className='rounded-lg object-cover h-full w-full'
          />
        </div>
      </div>

      <div className='mt-8 flex justify-start'>
        <Link
          href='/video-games'
          className='flex flex-row group w-36 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition duration-300 transform hover:scale-105 shadow-lg text-white rounded-xl items-center justify-between pl-4 mt-16'
        >
          <FontAwesomeIcon icon={faArrowLeft} size='xl' />
          <span className='text-s pr-10'>Back</span>
        </Link>
      </div>
    </div>
  );
};

export default GamePage;
