import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "/images/logo.png";

function Header() {
  const [hidden, setHidden] = useState(true);

  return (
    <nav className="w-full min-h-20 border-b border-gray-200 bg-white text-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse max-md:mt-2 max-md:mb-6">
          <img
            src={logo}
            alt="StartupSprint Logo"
            width={64}
            height={64}
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap">
            Mass Reporting
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Login Button */}
          <Link to="/login">
            <button
              type="button"
              className="text-[#0056D2] border-2 border-[#0056D2] bg-transparent hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center mx-2"
            >
              Login
            </button>
          </Link>
          {/* Get Started Button */}
          <Link to="/signup">
            <button
              type="button"
              className="text-white bg-[#0056D2] hover:bg-white hover:text-[#0056D2] hover:border-[#0056D2] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Get Started
            </button>
          </Link>
          <button
            onClick={() => setHidden(!hidden)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-black"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
