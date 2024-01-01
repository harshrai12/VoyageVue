import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdCardTravel } from "react-icons/md";
import { Link } from 'react-router-dom';

function UserNavbar() {
  return (
    <div className='bg-transparent  h-12'>
      <ul className=' text-sm font-poppins relative top-4  text-gray-100 flex justify-between mx-10'>
      <li><MdCardTravel  size={18}/></li>
      <ul className='flex justify-center gap-14'>
      <li>Expore</li>
      <li>Saved Diaries</li>
      <Link to="/profile"><li>My Profile</li></Link>
      </ul>
     
      <li><CiSearch size={18}/></li>
      </ul>
    </div>
  )
}

export default UserNavbar