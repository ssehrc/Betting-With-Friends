import React from "react"
import { users } from "../../data/users";

const ListUser = () =>{
    return (
        <h1>
            <div className="users-list">
                {users.map((user) =>{
                    return (
                    <div key={user.id}>
                        <div className="user-name">
                            {user.name}
                        </div>
                        
                    </div>
                    )
                })}
            </div>
        </h1>
    )
}

export default ListUser