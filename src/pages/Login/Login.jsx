import React from "react";

const Login = () =>{
    return(
        <div className="Login">
            <div className="card">
                <div className="left">
                    <h1>Betting With Friends</h1>
                    <p>Bet with your friends with no limits.</p>
                    <span>Don't have an account?</span>
                    <div><button>Register</button></div>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            type="password"
                            placeholder="password"
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