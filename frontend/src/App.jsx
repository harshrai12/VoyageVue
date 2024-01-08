
import { useState } from 'react'
import './App.css'
import Landing from './components/Landing.jsx'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import UserList from './components/UserList';
import AdminDashboard from './components/Admindashboard';
import Testimony from './components/Testimony';
import TripCatalog from './components/TripCatalog';
import TripData from "./components/trip.json"
import AdminLogin from './components/AdminLogin';



function App() {
  const token = localStorage.getItem('token');
 const [user,setUser]= useState(token);

console.log(user)
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<div className='w-full h-screen bg-no-repeat bg-cover '
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515824955341-43172b4d8260?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',}}
      >
        <Navbar/>
        <Landing setUser={setUser}/>
        <Testimony/>
        </div>}/>
        {
          user?(<>
            <Route path='/home' element={<Home/>}/>
          <Route path='/users' element={<UserList/>}/>
          <Route path='/profile' element={<UserProfile/>}/>
          <Route path='/book' element={<TripCatalog trips={TripData}/>}/>
          <Route path='/admin/login' element={<AdminLogin/>}/>
          <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
          
          </>
          ):(<>
            <Route path='/home' element={<div><h1>please register</h1></div>}/>
            <Route path='/users' element={<UserList/>}/>
            <Route path='/profile' element={<div><h1>please register</h1></div>}/>
            <Route path='/book' element={<TripCatalog trips={TripData}/>}/>
           
            </>)

        }
      

     
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
