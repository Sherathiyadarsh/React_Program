import React, { Fragment } from 'react'

const Listrendering = () => {
    let names = new Array("Darsh", "Heet", "Dhruv", "Rohit", "Vishal")
    let result = names.map((name, i) => <h4 key={i}>{name}</h4>)
    return (
        <>
            {/* {names.map((name, i) => <h4 key={i}>{name}</h4>)}<br />
            {names.map((name, i) => <Fragment key={i}>{name}</Fragment>)}<br/><br/>
            {result} */}

            {names.map((name, i) => {
                return <h4 key={i}>{name}</h4>
            })}
        </>
    )
}

export default Listrendering
