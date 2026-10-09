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
    <div className="text-3xl content-center bg-blue-500 text-white font-extrabold ">Betting with Friends
      <div className="text-2xl ">Who do you want to bet?
        <Search className="cursor-pointer"/>
        What do you want to bet on?
        <BetChoice/>
        What is the duration? (Start-End)
        <BetDuration /> 
        What is the prize?
        <BetPrize />
        <button className="box-border h-10 w-30 p-0 border-2 cursor-pointer bg-amber-50 text-blue-700" >Confirm</button>
      </div>
      
    </div>
    
  )
}

export default App
