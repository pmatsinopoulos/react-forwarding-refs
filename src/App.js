import React from 'react';
import logo from './logo.svg';
import './App.css';
import FancyButton from "./FancyButton";

const ref = React.createRef()

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.state = {
      prop1: 'prop1',
      prop2: 'prop2'
    }
  }

  handleButtonClick(event) {
    event.preventDefault()
    this.setState(state => ({
      prop1: state.prop1.repeat(2),
      prop2: state.prop2.repeat(2)
    }))
  }

  render() {
    return (
      <div className="App">
        <FancyButton ref={ref} prop1={this.state.prop1} prop2={this.state.prop2}>
          Hello
        </FancyButton>
        <button onClick={this.handleButtonClick}>Click to update fancy button props</button>
      </div>
    );
  }
}

export default App;
