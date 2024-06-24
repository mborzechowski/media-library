"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MainDashboard = () => {
  const router = useRouter();

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value) {
      router.push(`/${value}`);
    }
  };

  return (
    <div className="flex flex-col items-center py-8 space-y-10">
      <div className="grid grid-cols-6 gap-10">
        <button className="w-20 h-20 bg-blue-500 text-white rounded-lg flex items-center justify-center">
          Books
        </button>
        <button className="w-20 h-20 bg-green-500 text-white rounded-lg flex items-center justify-center">
          Video games
        </button>
        <button className="w-20 h-20 bg-red-500 text-white rounded-lg flex items-center justify-center">
          Board games
        </button>
        <button className="w-20 h-20 bg-purple-500 text-white rounded-lg flex items-center justify-center">
          Movies
        </button>
        <button className="w-20 h-20 bg-yellow-500 text-white rounded-lg flex items-center justify-center">
          Audiobook
        </button>
        <button className="w-20 h-20 bg-pink-500 text-white rounded-lg flex items-center justify-center">
          Comics
        </button>
      </div>
      <div className="w-full flex justify-center items-center px-4 gap-80">
        <div className="relative">
          <select
            onChange={handleSelectChange}
            className="appearance-none bg-gray-700 text-white py-2 pl-3 pr-20 rounded-lg text-start cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled hidden>
              ADD NEW
            </option>
            <option value="books">Book</option>
            <option value="video-games">Video Game</option>
            <option value="boardgames">Board Game</option>
            <option value="movies">Movie</option>
            <option value="audiobooks">Audiobook</option>
            <option value="comics">Comic</option>
          </select>
        </div>
        <div className="flex space-x-4">
          <button className="w-25 bg-gray-500 text-white py-2 px-4 rounded-lg">
            Button 1
          </button>
          <Link href="/library">
            <button className="w-25 bg-gray-500 text-white py-2 px-4 rounded-lg">
              Library
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
