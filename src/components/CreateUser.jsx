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
            </form>
        </h1>
    )
}

export default CreateUser