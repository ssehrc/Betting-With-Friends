import React from "react"

const CreateUser = () =>{
    return (
        <h1>
            <form>
                <div className="register-form">
                    Create a New Account:
                    <div>
                        <label for="register">Full Name: </label>
                        <input className="border-2"
                            type='text'
                            name="full-name"
                            id="full-name"
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
                        required
                    />
                </div>
                <div className="register-form">
                    <button className="border-2 border-black bg-black text-gray-300 
                    rounded text-xl cursor-pointer">Register</button>
                </div>
            </form>
        </h1>
    )
}

export default CreateUser