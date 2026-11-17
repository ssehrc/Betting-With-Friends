import React from "react"
import { Link } from "react-router-dom"

const Register = () =>{
    return (
        <h1>
            <div className="left -left-3">
                    <h1>Betting With Friends</h1>
                    <p>Bet with your friends with no limits.</p>
                    <span>Have an account?</span>
                    <Link to="\login">
                        <div>
                            <button className="border-2 cursor-pointer">Login</button>
                        </div>
                    </Link>
                </div>
            <form>
                <div className="register-form">
                    Create a New Account:
                    <div>
                        <label for="register">Username: </label>
                        <input className="border-2"
                            type='text'
                            name="username"
                            id="username"
                            placeholder="Username"
                            required
                        />
                    </div>      
                </div>
                <div className="register-form">
                    <label for="password">New Password: </label>
                    <input className="border-2"
                        type='text'
                        name="password"
                        id='password'
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="register-form">
                    <Link to="/bettingrequest"><button className="border-2 border-black bg-black text-gray-300 
                    rounded text-xl cursor-pointer">Register</button></Link>
                    
                </div>
            </form>
        </h1>
    )
}

export default Register