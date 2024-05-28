import React, {  children, Component } from 'react'

export default class Classcompdemo extends Component {
  handleClick() {
    alert("Button Clicked")
  }
  render() {
    let { username, address, children } = this.props
    // this.props.username="radhe" readonly
    return (
      <>
        <h1>Class components</h1>
        {/* <h2>{this.props.username}</h2> */}
        {/* <h2>{this.props.address}</h2> <hr/> */}
        {/* {this.props.children} */}
        {/* {this.props.children[1]} */}
        {/* {children[0]} */}
        {/* {username} */}

        <button type="button" class="btn btn-primary" onClick={this.handleClick}>Click Here
        </button>

      </>
    )
  }
}
