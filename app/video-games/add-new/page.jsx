'use client';
import GameForm from '@/components/GameForm';
import { useRouter } from 'next/navigation';

const AddNewGame = () => {
  const router = useRouter();

  const addGame = async (formData) => {
    const response = await fetch('http://localhost:8080/games', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      console.error('Failed to add game');
      return;
    }

    const game = await response.json();
    router.push('/video-games');
  };

  return (
    <div>
      <h1 className='text-center text-xl m-4'>Add a new game</h1>
      <GameForm onSubmit={addGame} />
    </div>
  );
};

export default AddNewGame;
