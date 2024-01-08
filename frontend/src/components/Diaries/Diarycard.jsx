import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const DiaryCard = ({ postData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const formatDate = (fullDateString) => {
    const datePart = fullDateString.substring(0, 10);
    return datePart;
  };

  const userFullName = postData?.user?.Fullname || 'Unknown User';

  return (
    <div className="w-[400px]  max-w-md rounded overflow-hidden shadow-lg bg-gray-200 bg-opacity-75 text-white backdrop-blur-sm">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={`data:image/jpeg;base64,${postData?.user?.profileImage}`}
              alt="User Profile"
              className="w-16 h-16 rounded-full border-4 border-white object-cover"
            />
            <div className="ml-4">
              <p className="text-lg font-semibold text-gray-800">{userFullName}</p>
              <p className='relative right-1 flex items-center justify-center text-gray-600 gap-1'>
                <FaMapMarkerAlt color='brown' />
                {postData.destination}
              </p>
              <p className="text-sm text-gray-600">{formatDate(postData.date)}</p>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3l3 8-9.6 5.6L12 21l6.6-9.4L15 11" />
            </svg>
          </button>
        </div>

        <img
          className=" w-[400px] h-[200px]  object-cover"
          src={`data:image/jpeg;base64,${postData.image}`}
          alt={postData.title}
        />

        <p className="h-[100px] text-gray-800 text-base mb-4">{postData.description}</p>
        <div className="  border-t border-gray-300 pt-4">
          <div className=" flex justify-between items-center">
            <div className="flex items-center space-x-2">{/* Add buttons/icons as needed */}</div>
            <button onClick={handleExpandClick} className="text-white hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transform transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          {expanded && (
            <div className="mt-4">
              <p className="text-gray-800 text-base">{postData.itinerary}</p>
              {/* ... Remaining content ... */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiaryCard;



