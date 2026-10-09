import React from 'react'

const BetDuration = ({betDuration, setBetDuration}) => {
    return(
        <div>
            <div className="start-duration">
                <div>
                    <input 
                        type="datetime-local"
                        placeholder="Type duration"
                        value={betDuration}
                        onChange={(e) => setBetDuration(e.target.value)}
                    />
                </div>
            </div>
            <div className='end-duration'>
                <div>
                    <input 
                        type="datetime-local"
                        placeholder="Type duration"
                        value={betDuration}
                        onChange={(e) => setBetDuration(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default BetDuration