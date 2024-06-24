import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full bg-blue-900 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-white font-bold text-xl">
          Media Library
        </Link>
        <div className="flex space-x-4">
          <Link href="/wishlist">
            <div className="w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold transition duration-300 hover:bg-gray-200">
              WL
            </div>
          </Link>
          <Link href="/profile">
            <div className="w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold transition duration-300 hover:bg-gray-200">
              P
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
