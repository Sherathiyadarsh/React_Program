import React, { useState } from 'react'
import IncreaseDecreasecount from './IncreaseDecreasecount'

const Counter = () => {
    let [count, setCount] = useState('')
    let handleCount = (val) => setCount(parseInt(count + val))
    let handleCount1 = (val) => {
        if (count > 1)
            setCount(parseInt(count - val))
        else
        setCount(1)
    }
    return (
        <>
            <h1>Counter : {count}</h1>
            <hr />
            <IncreaseDecreasecount increase={handleCount} decrease={handleCount1} />
        </>
    )
}

export default Counter
