import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdCardTravel } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

function UserNavbar() {
  return (
    <div className='bg-transparent  h-12'>
      <ul className=' text-sm font-poppins relative top-4  text-gray-100 flex justify-between mx-10'>
      <li className="flex">Logout <span> <IoIosLogOut /></span></li>
      <ul className='flex justify-center gap-14'>
      <Link to="/home"><li>Expore</li></Link>
      <li>Saved Diaries</li>
      <Link to="/profile"><li>My Profile</li></Link>
      <Link to="/book"><li>Book a Trip</li></Link>
      </ul>
     
      <li><CiSearch size={18}/></li>
      </ul>
    </div>
  )
}

export default UserNavbar