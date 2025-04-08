import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // Interactive elements: dynamic greeting and notifications
  const [greeting, setGreeting] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }

    // Simulate fetching notifications with a delay
    setTimeout(() => {
      setNotifications([
        'New message received',
        'Your profile was viewed',
        'A new update is available',
      ]);
    }, 1000);
  }, []);

  const toggleNotifications = () => setShowNotifications((prev) => !prev);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main content area */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-1/4 bg-blue-700 text-white p-6">
          <h2 className="text-xl font-bold mb-4">Dashboard Menu</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Overview
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Reports
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Analytics
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Settings
              </a>
            </li>
          </ul>
          <button
            onClick={handleLogout}
            className="mt-6 w-full bg-red-500 hover:bg-red-600 py-2 rounded"
          >
            Logout
          </button>
        </aside>

        {/* Main dashboard content */}
        <main className="flex-grow p-8">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h1 className="text-3xl font-bold mb-2">
              {greeting}, {user?.username}!
            </h1>
            <p className="text-lg mb-4">
              Welcome to your expanded dashboard. Enjoy a comprehensive view of
              your data.
            </p>
            <button
              onClick={toggleNotifications}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              {showNotifications ? 'Hide' : 'Show'} Notifications
            </button>
            {showNotifications && (
              <div className="mt-4">
                <h3 className="font-semibold">Notifications</h3>
                <ul className="mt-2">
                  {notifications.length > 0 ? (
                    notifications.map((note, index) => (
                      <li key={index} className="border-b py-1 text-gray-600">
                        {note}
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500">No notifications available</li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Additional interactive sections */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-2">Sales Overview</h2>
              <p className="text-gray-600">
                This section can contain a chart or metrics summary.
              </p>
              <div className="h-32 bg-gray-200 rounded mt-4 flex items-center justify-center">
                Chart Placeholder
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-2">Recent Activity</h2>
              <p className="text-gray-600">
                This section can list recent activities or logs.
              </p>
              <ul className="mt-4">
                <li className="py-1 border-b">Activity 1</li>
                <li className="py-1 border-b">Activity 2</li>
                <li className="py-1 border-b">Activity 3</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
