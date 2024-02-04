import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-3 relative">
      <div className="container mx-auto flex items-center justify-between p-8 pt-4">
        <div className="text-black flex items-center">
          <img
            className='w-[48px]'
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt="Starbucks Logo"
          />
          <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} pl-5 min:right-0 min:absolute top-0 right-0 h-full `}>
            <div className="transition-all duration-500 ease-in-out">
              <a href="#" className="px-4">MENU</a>
              <a href="#" className="px-4">REWARDS</a>
              <a href="#" className="px-4">GIFT CARDS</a>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg
              className="h-6 w-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} items-center space-x-4 text-black lg:right-0 `}>
          <a href="#" className='lg:pr-10 flex items-center'>
            <FaMapMarkerAlt className="mr-2 text-lg" />
            Find a store
          </a>
          <a href="#" className='border border-black rounded-full px-4 pt-[2px] pb-[2px]'>
            Sign in
          </a>
          <a href="#" className='lg:border lg:border-black lg:flex lg:justify-center lg:items-center lg:text-white lg:bg-black lg:rounded-full lg:pe-4 lg:pl-4 lg:pt-[2px] lg:pb-[2px]'>Join now</a>
        </div>
      </div>
      <div className=' border border-gray-200 shadow'></div>
    </nav>
  );
};

export default Navbar;
