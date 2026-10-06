import React from 'react'

const BetDuration = ({betDuration, setBetDuration}) => {
    return(
        <div className="duration">
            <div>
                <input 
                    type="datetime-local"
                    placeholder="Type duration"
                    value={betDuration}
                    onChange={(e) => setBetDuration(e.target.value)}
                />
            </div>
        </div>
    )
}

export default BetDuration