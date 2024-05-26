import React, { useState } from 'react'
import Registerimg from '../../assets/login.jpg'

const Formvalidition = () => {
    const [user, setUser] = useState({ username: '', email: '', password: '', cpassword: '' })
    const [errors, setErrors] = useState({})
    let handleSubmit = (e) => {
        e.preventDefault()
        let myerrors = Validition()
        console.log(myerrors);
        if (Object.keys(myerrors).length == 0) {
            setErrors({})
            setUser({ username: '', email: '', password: '', cpassword: '' })
            alert(JSON.stringify(user))
        }
        else {
            setErrors(myerrors)
            e.preventDefault()
        }
    }
    let Validition = () => {
        let formerrors = {}
        let emailpattern = /^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/
        if (user.username == '') {
            formerrors.unamerr = "Username is required"
        }
        if (user.email == '') {
            formerrors.emailerr = "Email is required"
        }
        else if (!emailpattern.test(user.email)) {
            formerrors.emailerr = "Invalid Email"
        }
        if (user.password == '') {
            formerrors.passworderr = "Password is required"
        }
        else if (user.password.length < 8 || user.password.length > 20) {
            formerrors.passworderr = "min 8 and max 20 char allowed"
        }
        if (user.cpassword == '' || user.cpassword != user.password) {
            formerrors.cpassworderr = "Password not match"
        }
        return formerrors
    }
    return (
        <div className='container mt-5 col-8'>
            <div className="row">
                <h1>Form Validitions</h1>
                <hr />
                <div className="col">
                    <img src={Registerimg} className='img-fluid' />
                </div>
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" name="Username" className={`form-control ${errors.unamerr && 'is-invalid'}`} value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                            {errors.unamerr && <span className="text-danger">{errors.unamerr}</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" name="email" className={`form-control ${errors.emailerr && 'is-invalid'}`} value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                            {errors.emailerr && <span className="text-danger">{errors.emailerr}</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className={`form-control ${errors.passworderr && 'is-invalid'}`} value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                            {errors.passworderr && <span className="text-danger">{errors.passworderr}</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" name="cpassword" className={`form-control ${errors.cpassworderr && 'is-invalid'}`} value={user.cpassword} onChange={(e) => setUser({ ...user, cpassword: e.target.value })} />
                            {errors.cpassworderr && <span className="text-danger">{errors.cpassworderr}</span>}
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formvalidition
