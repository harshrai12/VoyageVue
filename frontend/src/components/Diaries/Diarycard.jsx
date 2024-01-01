import React, { useState } from 'react';

const DiaryCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-gray-200 bg-opacity-75 text-white">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full">
              R
            </div>
            <div className="ml-4">
              <p className="text-lg font-semibold">Shrimp and Chorizo Paella</p>
              <p className="text-sm text-gray-600">September 14, 2016</p>
            </div>
          </div>
          <button className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 3l3 8-9.6 5.6L12 21l6.6-9.4L15 11"
              />
            </svg>
          </button>
        </div>
        <img
          className="w-full h-48 object-cover mb-4"
          src="https://images.unsplash.com/photo-1682685797277-f2bf89b24017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Paella dish"
        />
        <p className="text-gray-800 text-base mb-4">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </p>
        <div className="border-t border-gray-300 pt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <button className="text-teal-500 hover:text-teal-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 3l3 8-9.6 5.6L12 21l6.6-9.4L15 11"
                  />
                </svg>
              </button>
              <button className="text-amber-500 hover:text-amber-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 12a8 8 0 018-8V3l4 4-4 4v2a8 8 0 01-8 8H4zm11 4l4-4-4-4m0 8h6"
                  />
                </svg>
              </button>
            </div>
            <button
              onClick={handleExpandClick}
              className="text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transform transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          {expanded && (
            <div className="mt-4">
              <p className="text-gray-800 text-base">
                Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
              </p>
              {/* ... Remaining content ... */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiaryCard;
