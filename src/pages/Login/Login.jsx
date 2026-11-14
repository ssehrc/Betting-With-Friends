import React from "react";

const Login = () =>{
    return(
        <div className="Login">
            <div className="card">
                
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