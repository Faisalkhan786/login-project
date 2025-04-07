import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <p className="mb-6">
            Welcome, <span className="font-medium">{user?.username}</span>! This is a protected page.
          </p>
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
