import React from "react";

const Home = () => {
  // Sample carousel items data
  const carouselItems = [
    { id: 1, title: "Item One", description: "Description 1", imageUrl: "https://via.placeholder.com/300" },
    { id: 2, title: "Item Two", description: "Description 2", imageUrl: "https://via.placeholder.com/300" },
    { id: 3, title: "Item Three", description: "Description 3", imageUrl: "https://via.placeholder.com/300" },
    { id: 4, title: "Item Four", description: "Description 4", imageUrl: "https://via.placeholder.com/300" },
    { id: 5, title: "Item Five", description: "Description 5", imageUrl: "https://via.placeholder.com/300" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      {/* Hero content card */}
      <div className="relative z-10 max-w-6xl w-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Welcome to Our Innovative Platform
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Explore cutting-edge products, services, and features designed just for you.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={() => console.log("Get Started clicked")}
            className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300"
          >
            Get Started
          </button>
          <button
            onClick={() => console.log("Learn More clicked")}
            className="px-8 py-4 bg-gray-200 text-gray-900 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-300 transform hover:scale-105 transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
