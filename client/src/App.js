import { useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNavbar from './components/common/PageNavbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dishes from './components/dishes/Menu'
import Booking from './components/dishes/BookingAdd'
import Home from './components/dishes/Home'
import Location from './components/dishes/Location'
import Findus from './components/dishes/Findus'
import Story from './components/dishes/Story'
import BookingEdit from './components/dishes/BookingEdit'
import Footer from './components/dishes/Footer'

const App = () => {

  return (
    <BrowserRouter>
      <PageNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dishes" element={<Dishes/>} />
        <Route path="/bookings" element={<Booking/>} />
        <Route path="/bookings/:id/" element={<BookingEdit/>} />
        <Route path="/locations" element={<Location/>} />
        <Route path="/find-us" element={<Findus/>} />
        <Route path="/story" element={<Story/>} />
        


      </Routes>
      <Footer />
    </BrowserRouter>



  )

}

export default App
