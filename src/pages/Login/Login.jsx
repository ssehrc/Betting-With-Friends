import React from "react";
import { Link } from "react-router-dom";

const Login = () =>{
    return(
        <div className="Login">
            <div className="card">
                <h1 className="font-Redaction50 text-white text-3xl flex items-center place-content-center">Betting With Friends</h1>
                <div className="font-Redaction50 place-content-center flex grid-cols-3 gap-2  text-white ">
                    <p className="">Bet with your friends with no limits.</p>
                    <span className="">Don't have an account?</span>
                    <Link to="\register">
                    <h1><button className="underline cursor-pointer">Register</button></h1>
                    </Link>
                </div>
                <div className="place-content-center flex font-Redaction50 text-2xl text-white">Login</div>
                    <div className=" text-white">
                        <form className="place-content-center flex grid-rows-3 gap-3">
                            <input className="border-2 rounded"
                                type="text"
                                placeholder="Username"
                            />
                            <input className="border-2 rounded"
                                type="password"
                                placeholder="Password"
                            />
                            <div>
                                <Link to="\bettingrequest">
                                <button className="font-Redaction50 border-2 border-white bg-white text-black 
                        rounded cursor-pointer">Login</button>
                                </Link>
                                
                            </div>
                        </form> 
                </div>
            </div>
        </div>
    )
}

export default Login