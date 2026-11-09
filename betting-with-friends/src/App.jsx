import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import BettingRequestPage from './components/BettingRequest'

function App() {
  return ( 
    <div>
      <h1>Bet With Friends</h1>
      <div>
        <BettingRequestPage />
      </div>
    </div>
  )
}

export default App
