import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../components/pages/Home'
import {Nav} from '../components/layouts/Nav'
import { Exercises } from '../components/pages/Exercises'

export const Routers = () => {
  return (
    <BrowserRouter>
    <Nav/>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/ejercicios' element={<Exercises/>}/>
    </Routes>
    </BrowserRouter>
  )
}
