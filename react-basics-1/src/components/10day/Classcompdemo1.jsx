import React, { Component } from 'react'
import Registerimg from '../../assets/login.png'

export default class Classcompdemo1 extends Component {
    constructor(props) {
        super(props)
        this.state = { email: 'ram@gmail.com', salary: 80000, user: { username: '', email: '', password: '', cpassword: '' } }
    }
    handleChange = (e) => {
        this.setState({
            user:{...this.state.user, [e.target.name]: e.target.value }
        })
    }
    submitForm = (e) => {
        e.preventDefault()
        alert(JSON.stringify(this.state.user))
    }
    changEmail = () => {
        //this.setState() - use the all state change and render in the broweser - in class components
        this.setState({ email: "Heet@gmail.com" })
    }
    render() {
        return (
            <>
                <h1>Class components</h1>
                <h1>{this.state.email}</h1>
                <h1>{this.state.salary}</h1>
                <button type="button" class="btn btn-primary" onClick={this.changEmail}>Change Email</button>


                <div className="row">
                    <h1>Form Demo 1</h1>
                    <hr />
                    <div className="col">
                        <img src={Registerimg} className='img-fluid' />
                    </div>
                    <div className="col">
                        <form onSubmit={this.submitForm}>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" name="username" className="form-control" value={this.state.user.username} onChange={this.handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" name="email" className="form-control" value={this.state.user.email} onChange={this.handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" value={this.state.user.password} onChange={this.handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" name="cpassword" className="form-control" value={this.state.user.cpassword} onChange={this.handleChange} />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </>
        )
    }
}
