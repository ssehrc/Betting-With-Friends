import { useState } from 'react'
import './App.css'
import BettingRequest from './components/BettingRequest'
import ListUser from './components/ListUser'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return ( 
    <div>
      <h1>Bet With Friends</h1>
      <div>
        <BettingRequest />
      </div>
    </div>
  )
}

export default App
