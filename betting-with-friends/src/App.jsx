import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Search from './components/SearchOpponent'
import BetChoice from './components/BetChoice'
import BetPrize from './components/BetPrize'
import BetDuration from './components/BetDuration'

function App() {
  const [placeBet, setplaceBet] = useState('');

  const fetchUsers = async (query = '') =>{
    
  }
  return ( 
    <div className="text-3xl content-center bg-blue-800 text-blue-100 font-extrabold">Betting with Friends
      <div className="text-2xl">Who do you want to bet?
        <Search/>
        What do you want to bet on?
        <BetChoice/>
        What is the duration?
        <BetDuration/>
        What is the prize?
        <BetPrize />
      </div>
    </div>
    
  )
}

export default App
