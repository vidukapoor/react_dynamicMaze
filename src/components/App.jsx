/**
 * @author vishwadeep
 */
import React, { Component } from 'react';
import Containor from './Containor.jsx'
import Toy from './Toy.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = { width: 0, height: 0 };
  }

  /**
   * @func react life cycle
   */
  componentWillMount() {
    this.handleInput();
  }

  /**
   * @event handleInput 
   * @desc Gets the value from the promt box and sets to a {state}
   */
  handleInput() {
    let width = prompt('Please insert board width') || 0;
    let height = prompt('Please insert board height') || 0;
    height = Number(height);
    width = Number(width);
    this.setState({ width, height })
  }

  /**
   * @func handleKeyPress()
   * @param {key} event 
   * @todo toy to be moved using this @func
   * @default console
   * @emits keyCode
   */
  handleKeyPress(event) {
    switch (event.keyCode) {
      case 87:
        console.log('w')
        break;
      case 65:
        console.log('a')
        break;
      case 83:
        console.log('s')
        break;
      case 68:
        console.log('d')
        break;
      default:
        console.log(event.keyCode);
    }
  }

  /**
   * @return UI
   */
  render() {
    const { width, height } = this.state;
    return (
      <div onKeyDown={(e) => this.handleKeyPress(e)} tabIndex="0">
        <h3>width:{width} height:{height}</h3>
        <Containor width={width} height={height} />
      </div>
    );
  }
}

export default App;
