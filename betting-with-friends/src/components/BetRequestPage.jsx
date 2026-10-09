import React from "react"
import { useActionState } from "react"

const BetRequest = () =>{
    async function requestBet(prevState, formData) {
        "use server";
        const friendName = formData.get("friend");
        try{
            await friendBet(friendName);
            alert(`Requested bet with ${friendName}`);
        }catch(err){
            return err.toString();
        }
    }
    const [request, sentRequest] = useActionState(requestBet, null);
    return(
        <>
            <h1>Request a bet with your friend!</h1>
            <p>Enter your friends screen name.</p>
            <form action={sentRequest} id="submit-friend-name">
                <label htmlFor="friendName">Name: </label>
                <input name="friendName" id="friendName" placeholder="Friend Name"/>
                <button>Submit</button>
                {!!message && <p>{message}</p>}
            </form>
        </>
        
    )
}

export default BetRequest