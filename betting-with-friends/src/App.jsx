import { useState } from 'react'
import './App.css'
import BettingRequest from './components/BettingRequest'
import ListUser from './components/ListUser'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CreateUser from './components/CreateUser'

function App() {
  return ( 
    <div>
      <h1>Bet With Friends</h1>
      <div>
        <BettingRequest />
      </div>
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">List Users</Link>
              </li>
              <li>
                <Link to="user/create">Create User</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route index element={<ListUser />}/>
            <Route path='user/create' element={<CreateUser />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
