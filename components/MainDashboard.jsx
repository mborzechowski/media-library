"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faDiceFive,
  faBook,
  faClapperboard,
  faHeadphones,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const MainDashboard = () => {
  const router = useRouter();

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value) {
      router.push(`/${value}/add-new`);
    }
  };

  return (
    <div className="flex flex-col items-center py-8 space-y-10">
      <div className="grid grid-cols-6 gap-14">
        <button className="w-20 h-20 bg-blue-500 hover:bg-blue-600 transition duration-200 transform hover:scale-95 shadow-md text-white rounded-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faBook} size="2xl" />
        </button>
        <Link
          href="/video-games"
          className="w-20 h-20 bg-green-500 hover:bg-green-600 transition duration-200 transform hover:scale-95 shadow-md text-white rounded-lg flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faGamepad} size="2xl" />
        </Link>
        <button className="w-20 h-20 bg-red-500 hover:bg-red-600 transition duration-200 transform hover:scale-95 shadow-md text-white rounded-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faDiceFive} size="2xl" />
        </button>
        <button className="w-20 h-20 bg-purple-500 hover:bg-purple-600 transition duration-200 transform hover:scale-95 shadow-md text-white rounded-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faClapperboard} size="2xl" />
        </button>
        <button className="w-20 h-20 bg-yellow-500 hover:bg-yellow-600 transition duration-200 transform hover:scale-95 shadow-md text-white rounded-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faHeadphones} size="2xl" />
        </button>
        <button className="w-20 h-20 bg-pink-500 hover:bg-pink-600 transition duration-200 transform hover:scale-95 shadow-md text-white rounded-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faCommentDots} size="2xl" />
        </button>
      </div>
      <div className="w-full flex justify-start items-center px-60">
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
      </div>
    </div>
  );
};

export default MainDashboard;
