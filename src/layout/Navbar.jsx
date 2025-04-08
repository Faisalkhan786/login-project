import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // mock auth status
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/login');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav
      className={`p-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-600 text-white'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">My App</div>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link
              to="/dashboard"
              className="hover:underline transition-colors duration-200"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="hover:underline transition-colors duration-200"
            >
              Profile
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={handleLogin}
                className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
