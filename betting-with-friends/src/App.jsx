import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import BetRequest from './components/BetRequestPage'

function App() {
  return ( 
    <div>
      <h1>Bet With Friends</h1>
      <div>
        <form id="submit-friend-name">
                <label>Name: </label>
                <input name="friendName" id="friendName" placeholder="Friend Name"/>
                <button className='text-red-800 w-25 border-2 cursor-pointer'>Submit</button>
            </form>
      </div>
    </div>
  )
}

export default App
