import React from 'react'

const PropsDemoinFun = (props) => {
    // console.log(props)
    // props.username="Meera"
  return (
    <div>
      <h2>Krushnam Sada Sahayte</h2>
      <h3>{props.username}</h3>
      <h3>{props.address}</h3>
    </div>
  )
}

export default PropsDemoinFun
