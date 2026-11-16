import { useState } from 'react'
import './App.css'
import BettingRequest from './pages/BettingRequest/BettingRequest'
import { BrowserRouter, Routes, Route, Link, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'


function App() {
  const router = createBrowserRouter ([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register /> 
    }
  ]);
  return ( 
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
