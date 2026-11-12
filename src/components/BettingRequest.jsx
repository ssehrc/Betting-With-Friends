import React from "react";
import { useState } from "react";
import { users } from "../../data/users";

const BettingRequest = () =>{
    
    return (
        <div className="font-MonaSans ">
            <form >
                <div className="betting-form">
                    <label for="friend-name"></label>
                    <select className="cursor-pointer"
                        name="friend"
                        id="friend-name"
                        required
                    >
                        <option value="" >Select a Friend:</option>
                        {users.map((user) => {
                            return ( <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                            )
                        })}
                    </select>
                </div>
                <div className="betting-form">
                    <label  for="bet">What are you betting on? </label>
                    <input className="cursor-pointer border-2"
                        type="text"
                        name="bet"
                        id="bet"
                        required
                    />
                </div>
                <div className="betting-form">
                    <label for="prize">What is your bet? </label>
                    <input className="cursor-pointer border-2"
                        type="text"
                        name="prize"
                        id="prize"
                        required
                    />
                </div>
                <div className="betting-form">
                    <button className="border-2 border-purple-800 bg-purple-800 text-gray-300 
                    rounded text-xl cursor-pointer">Send Request</button>
                </div>
            </form>
        </div>
    )
}

export default BettingRequest