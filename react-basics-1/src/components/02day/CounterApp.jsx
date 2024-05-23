import React, { Fragment, useState } from 'react'

const CounterApp = () => {
    let [count, setCount] = useState('')
    let handledecrease=()=>{
        if(count > 1)
        setCount((prev)=>Number(prev)-1)
    }
    return (
        <Fragment>
            <button type="button" className="btn btn-primary me-2" onClick={()=>setCount(Number(count)+1)}>Increase Counter</button>
            <button type="button" className="btn btn-primary me-2" onClick={handledecrease}>Decrease Counter</button>
            <h1>{count}</h1>

        </Fragment>
    )
}

export default CounterApp
