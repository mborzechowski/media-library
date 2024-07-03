"use client";
import GameForm from "@/components/GameForm";

const AddNewGame = () => {
  const addGame = async (data) => {
    const response = await fetch("http://localhost:8080/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Failed to add game");
      return;
    }

    const game = await response.json();
    console.log("Game added:", game);
  };

  return (
    <div>
      <h1 className="text-center text-xl m-4">Add a new game</h1>
      <GameForm onSubmit={addGame} />
    </div>
  );
};

export default AddNewGame;
