import React, { useEffect, useState } from 'react';
import UserNavbar from './UserNavbar';
import DiaryCard from './Diaries/Diarycard';
import { CiCirclePlus } from "react-icons/ci";
import DiaryPostForm from './Diaries/DiaryPostForm';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [openD, setOpenD] = useState(false)

  useEffect(() => {
   
    const token = localStorage.getItem('token');

    if (token) {
      fetch('http://localhost:3000/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {

          setUserData(data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []); 

  console.log(userData)
  return (
    <div className="bg-gray-100 min-h-screen bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1682685797140-c17807f8f217?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
      <UserNavbar />

      <div className="mx-auto max-w-xl mt-16 lg:max-w-4xl">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          {/* ... (rest of your component) */}
          
          {userData && (
            <div className="flex items-center justify-between p-8 bg-purple-700">
              <div className="flex items-center space-x-4">
                <img
                  src={`data:image/jpeg;base64,${userData.profileImage}`}  
                  alt="User Profile"
                  className="w-16 h-16 rounded-full border-4 border-white"
                />
                <div>
                  <h1 className="text-2xl font-bold text-white">{userData.Fullname}</h1>
                  <p className="text-gray-200 text-sm">{userData.bio}</p>
                  <p className="text-gray-200 text-sm">{userData.email}</p>
                </div>
              </div>
              <CiCirclePlus className='hover:cursor-pointer' size={70} color='white' onClick={()=>setOpenD(!openD)}/>
            </div>
          )} 

          {/* ... (rest of your component) */}
          
        </div>
      </div>
      <DiaryPostForm openD={openD} setOpenD={setOpenD}/>
    </div>
  );
}

export default UserProfile;





