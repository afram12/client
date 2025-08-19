import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Courses from './pages/Courses'
import  Register  from './pages/Register'
import{
  Routes,
  Route,
}from "react-router-dom";
import Mybooking from './pages/Mybooking'
import Coursedetail from './pages/Coursedetail'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/courses" element={<Courses />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/mybooking" element={<Mybooking/>}/>
      <Route path="/coursdetils/:id" element={<Coursedetail/>}/>
      

    </Routes>
    <Footer/>

    </>
  )
}

export default App