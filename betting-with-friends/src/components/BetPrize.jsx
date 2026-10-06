import React from 'react'

const BetPrize = ({betPrize, setBetPrize}) => {
    return(
        <div className="prize">
            <div>
                <input 
                    type="number"
                    placeholder="Type in prize money"
                    value={betPrize}
                    onChange={(e) => setBetPrize(e.target.value)}
                />
            </div>
        </div>
    )
}

export default BetPrize