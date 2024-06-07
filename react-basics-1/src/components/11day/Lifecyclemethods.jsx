import React, { Component, createRef } from 'react'
import ChildRefinClass from './ChildRefinClass';
import ChildRefForward from './ChildRefForward';

export default class Lifecyclemethods extends Component {
  constructor(props) {
    console.log("constructor called");
    super(props)

    this.state = { Firstname: this.props.username }
    this.focusRef = createRef()
    this.myRef = createRef()
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
  shouldComponentUpdate(nextprops, nextstate) {
    console.log("shouldComponentUpdate called");
    return true
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
        <ChildRefinClass innerRef={this.focusRef} /><br />
        <hr />
        <br />
        <button type="button" class="btn btn-primary me-4" onClick={()=>this.myRef.current.play()}>play</button>
        <button type="button" class="btn btn-primary me-4"onClick={()=>this.myRef.current.pause()}>pause</button>
        
        <ChildRefForward id={1001} ref={this.myRef}/>
      </>
    )
  }
}
