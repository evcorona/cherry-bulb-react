import React, { Component } from 'react'
import { Button } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isOn: false
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  changeHandler(event) {
    let newText = event.target.value
    this.setState({ textToShow: newText })
    console.log(newText)
  }
  clickHandler() {
    console.log(this.state.isOn)
    this.setState({ isOn: !this.state.isOn })
  }
  render() {
    return (
      <div className="App">
        <div className="container mt-3">
          <i className={this.state.isOn ? "fas fa-lightbulb text-warning" : "far fa-lightbulb"}></i>
          <Button className="m-4" onClick={this.clickHandler}>{this.state.isOn ? "Apagar" : "Encender"}</Button>
        </div>
      </div>
    )
  }
}
export default App;