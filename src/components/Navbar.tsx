import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <span className="text-white text-2xl font-bold cursor-pointer">
            Movie Efa
          </span>
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 7.41L17.59 6 12 11.59 6.41 6 5 7.41 12 14.41 19 7.41Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <Link href="/" passHref>
            <span className="text-white hover:text-gray-300 mx-2 cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-white hover:text-gray-300 mx-2 cursor-pointer">
              About
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
