import React, { PureComponent, createRef } from 'react'

export default class PureCompClassDemo extends PureComponent {
  constructor(props) {
    console.log("constructor called");
    super(props)

    this.state = { Firstname: this.props.username }
    this.focusRef = createRef()
  }
  static getDerivedStateFromProps = (state, props) => {
    console.log("getDeviredStateFromPrope called");
    return { state }
  }
  componentDidMount() {
    console.log("componentDidMount called");
    this.focusRef.current.focus()
  }
  handleNameChange = () => {
    console.log("handleNameChange called");
    this.setState({ Firstname: "@Dasu" })
  }
  componentDidUpdate() {
    console.log("componentDidUpdate called");
    this.focusRef.current.value = "Upadated"
    this.focusRef.current.style.color = "red"
  }
  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  render() {
    console.log("render called");
    return (
      <>
        <button type="button" class="btn btn-primary" onClick={this.handleNameChange}>Change Name</button><br /><br />
        <h1>{this.state.Firstname}</h1><br />
        <input type="text" className='form-control' ref={this.focusRef} />

      </>
    )
  }
}
