
import { useState } from 'react'
import './App.css'
import Landing from './components/landing'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import UserList from './components/UserList';


function App() {
 const [user,setUser]= useState(true);

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<div className='w-full h-screen bg-no-repeat bg-cover '
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515824955341-43172b4d8260?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',}}
      >
        <Navbar/>
        <Landing/>
        </div>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/users' element={<UserList/>}/>
      <Route path='/profile' element={<UserProfile/>}/>
     
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
