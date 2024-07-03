"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
          throw new Error("Failed to fetch game data");
        }
        const gameData = await response.json();
        setGame(gameData);
      } catch (error) {
        console.error("Error fetching game:", error);
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
      <h1 className="text-center text-2xl font-bold mt-10">Game Not Found</h1>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{game.title}</h1>
      <p>Genre: {game.genre}</p>
      <p>Platform: {game.platform}</p>
      <p>Year Published: {game.yearPublished}</p>
      <p>Physical/Digital: {game.physicalDigital}</p>
      <p>Publisher: {game.publisher}</p>
      <p>Developer: {game.developer}</p>
      <p>Completed: {game.completed ? "Yes" : "No"}</p>
      <p>Rating: {game.rating}</p>
    </div>
  );
};

export default GamePage;
