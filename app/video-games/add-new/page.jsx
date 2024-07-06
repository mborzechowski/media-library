'use client';
import GameForm from '@/components/GameForm';

const AddNewGame = () => {
  const addGame = async (formData) => {
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    const response = await fetch('http://localhost:8080/games', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      console.error('Failed to add game');
      return;
    }

    const game = await response.json();
    console.log('Game added:', game);
  };

  return (
    <div>
      <h1 className='text-center text-xl m-4'>Add a new game</h1>
      <GameForm onSubmit={addGame} />
    </div>
  );
};

export default AddNewGame;
