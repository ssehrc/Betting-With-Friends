import React from 'react'

const BetChoice = ({betChoice, setBetChoice}) => {
    return(
        <div className="bet">
            <div>
                <input 
                    type="text"
                    placeholder="Type in your bet"
                    value={betChoice}
                    onChange={(e) => setBetChoice(e.target.value)}
                />
            </div>
        </div>
    )
}

export default BetChoice