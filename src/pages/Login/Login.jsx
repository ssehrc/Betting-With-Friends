import React from "react";
import { Link } from "react-router-dom";

const Login = () =>{
    return(
        <div className="Login">
            <div className="card">
                <div className="left -left-3">
                    <h1>Betting With Friends</h1>
                    <p>Bet with your friends with no limits.</p>
                    <span>Don't have an account?</span>
                    <Link to="\register">
                    <h1><button className="border-2 cursor-pointer">Register</button></h1>
                    </Link>
                </div>
                <div className="right flex-1 -right-1/2">
                <h1>Login</h1>
                    <form>
                        <input className="border-2"
                            type="text"
                            placeholder="Username"
                        />
                        <input className="border-2"
                            type="password"
                            placeholder="Password"
                        />
                        <div>
                            <button className="border-2 border-black bg-black text-gray-300 
                    rounded text-xl cursor-pointer">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login