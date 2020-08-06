import React, {Component} from 'react';
import './App.css';
import Keypad from './component/Keypad'
import Output from './component/Output'

class App extends Component {

  state = {
    result: ''
  }
  
  buttonPressed = buttonName => {

    if (buttonName === '=') {
      this.calculate()
    } else if (buttonName === 'C') {
        this.reset()
      } else if (buttonName === 'CE'){
        this.backSpace()
    } else 
      this.setState({
        result: this.state.result + buttonName
      })
  }

  reset = () => {
    this.setState({
      result: ''
    })
  }

  backSpace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  calculate = () => {
    try {this.setState({
      result: (eval(this.state.result) || '') + ''
    })
    } catch (e) {
      this.setState({
        result: 'error'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className='calc-body'>
          <Output result={this.state.result} />
          <Keypad buttonPressed={this.buttonPressed} />
        </div>
      </div>
    )
  }
}

export default App;
