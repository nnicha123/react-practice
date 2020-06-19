import React, { useState, useMemo } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    // similar to useCallback (when you need to cache function useCallback but when you need to cache result useMemo)
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++
        return (counterOne % 2 === 0)
    }, [counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                {isEven ? 'Even' : 'Odd'} 
                {/* note isEven is no longer a function it is a value*/}
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
