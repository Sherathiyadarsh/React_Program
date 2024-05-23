import React, { useState } from 'react'
import Registerimg from '../../assets/login.jpg'

const RegisterForm = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    // let handleChange=(e)=>{
    //     console.log(e);
    //     setUsername(e.target.value)
    // }
    let handleSubmit=(e)=>{
        e.preventDefault()
        alert(`${username} and ${password}`)
    }
    return (
        <div className='container mt-5 col-8'>
            <div className="row">
                <h1>Form Demo</h1>
                <hr />
                <div className="col">
                    <img src={Registerimg} className='img-fluid'/>
                </div>
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" name="Username"className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                        {/* <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" name="email"className="form-control" />
                        </div> */}
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password"className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        {/* <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" name="cpassword"className="form-control" />
                        </div> */}
                        <div className="d-grid gap-2">
                            <button type="submit"className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
