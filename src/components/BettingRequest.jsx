import React from "react";
import { useState } from "react";
import { users } from "../../data/users";

const BettingRequest = () =>{
    
    return (
        <div className="">
            <form>
                <div className="betting-form">
                    <label for="friend-name"></label>
                    <select
                        name="friend"
                        id="friend-name"
                        required
                    >
                        <option value="">Select a Friend:</option>
                        {users.map((user) => {
                            return ( <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                            )
                        })}
                    </select>
                </div>
                <div className="betting-form">
                    <label for="bet">What are you betting on? </label>
                    <input 
                        type="text"
                        name="bet"
                        id="bet"
                        required
                    />
                </div>
                <div className="betting-form">
                    <label for="prize">What is your bet? </label>
                    <input
                        type="text"
                        name="prize"
                        id="prize"
                        required
                    />
                </div>
                <div className="betting-form">
                    <button className="border-2 border-red-500 cursor-pointer">Send Request</button>
                </div>
            </form>
        </div>
    )
}

export default BettingRequest