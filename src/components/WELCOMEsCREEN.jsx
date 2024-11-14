import React from "react";

function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-evenly w-226 h-72 p-8 bg-red-400 shadow-xl">
      <h1 className="text-3xl font-bold mb-9 text-center text-white">
        Hello! Welcome to our survey.<br></br> We are glad you are here.
      </h1>

      <button
        className="bg-red-600 hover:bg-maron-700 text-white text-lg font-medium py-3 px-6 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={onStart}>
        Start
      </button>
    </div>
  );
}
export default WelcomeScreen;