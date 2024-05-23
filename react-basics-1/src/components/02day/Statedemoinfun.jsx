import React, { useState } from 'react'

const Statedemoinfun = (props) => {
    let [username,setUsername]=useState(props.uname)
    let [num1,setNum1]=useState(10)
    let [num2,setNum2]=useState(20)
    let [result,setResult]=useState(0)
    let [isLoggedIn,setIsLoggedIn]=useState(true)
    let [user,setUser]=useState({})
    let [users,setUsers]=useState([])

    let handleChange=()=>{
        setUsername("Siya")
    }
  return (
    <div>
      <h1>State Demo</h1>
      <button type="button" className="btn btn-danger" onClick={handleChange}>Change Username</button>
      <h3>{username}</h3><hr/>
      <button type="button" className="btn btn-primary" onClick={()=>setResult(num1+num2)}>Addition</button>
      <h3>Num1 : {num1} and Num2 : {num2}</h3>
      <h3>Result : {result}</h3>
    </div>
  )
}

export default Statedemoinfun
