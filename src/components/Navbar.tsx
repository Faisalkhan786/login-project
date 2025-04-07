import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">My App</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:underline">
              Profile
            </Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
