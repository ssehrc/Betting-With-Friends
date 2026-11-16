import React from "react";
import { Link } from "react-router-dom";

const Login = () =>{
    return(
        <div className="Login">
            <div className="card">
                <h1 className="login-title font-MonaExpanded text-white text-3xl flex items-center place-content-center">Betting With Friends</h1>
                <div className="font-Redaction50 grid grid-cols-3 gap-2 place-content-center text-white ">
                    <p className="">Bet with your friends with no limits.</p>
                    <span className="">Don't have an account?</span>
                    <Link to="\register">
                    <h1><button className="border-2 rounded cursor-pointer">Register</button></h1>
                    </Link>
                </div>
                <div className="right flex-1 text-white">
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
                            <Link to="\bettingrequest">
                            <button className="border-2 border-black bg-black text-gray-300 
                    rounded text-xl cursor-pointer">Login</button>
                            </Link>
                            
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    )
}

export default Login