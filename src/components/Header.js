import React from "react";

export default function Header({ setIsOpen, isOpen }) {
  return (
    <header className="bg-teal-800 sticky top-0 ">
      <div className="flex justify-between max-w-7xl items-center mx-auto h-20 px-4">
        <div className="flex items-center text-green-400 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fill-rule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <h3 className="text-white text-2xl font-bold mx-1 ">TODO</h3>
        </div>

        <button
          className="bg-teal-600 px-4 py-3 rounded-lg shadow-md hover:bg-teal-400"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="ml-1 text-white font-bold">Add New</span>
          </div>
        </button>
      </div>
    </header>
  );
}
