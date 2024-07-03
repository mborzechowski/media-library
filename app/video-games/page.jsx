"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Library = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:8080/games");
        if (!response.ok) {
          throw new Error("Failed to fetch games");
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

  useEffect(() => {
    console.log(games);
  }, [games]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!games) {
    return <h1 className="text-center text-xl m-4">No Games Found</h1>;
  }
  return (
    <div>
      <h1 className="text-center text-xl m-4">Game List</h1>
      <div className="flex flex-col  items-center py-8 space-y-10">
        <div className="grid grid-cols-10 gap-8 px-10 ">
          {games.map((game) => (
            <div
              key={game.id}
              className="m-2 p-2 border border-gray-300 rounded w-24 h-20"
            >
              <Link href={`/video-games/${game.id}`}>{game.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
