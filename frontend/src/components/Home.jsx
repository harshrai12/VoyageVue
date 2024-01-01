import React from 'react'
import UserNavbar from './UserNavbar'
import Diarylist from './Diaries/Diarylist'

function Home() {
  return (
    <div className='w-full h-screen bg-no-repeat bg-cover  ' 
    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',}}>
      <UserNavbar/>
      <Diarylist/>
    </div>
  )
}

export default Home
