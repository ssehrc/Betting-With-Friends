import { useState } from 'react'
import './App.css'
import BettingRequest from './pages/BettingRequest/BettingRequest'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CreateUser from './pages/CreateUser/CreateUser'
import Login from './pages/Login/Login'

function App() {
  return ( 
    <div>
      <h1 className='font-MonaExpanded text-3xl text-indigo-900'>Betting With Friends</h1>
      <div>
        <Login />
      </div>
      <div>
        <BettingRequest />
      </div>
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              
              <li>
                <Link to="user/create">Register</Link>
                
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='user/create' element={<CreateUser />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
