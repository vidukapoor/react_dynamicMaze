import React from 'react';
import Containor from './Containor.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.handleInput = this.handleInput.bind(this);
  }
  componentWillMount() {
    this.handleInput();
  }

  handleInput() {
    const width = prompt('Please insert board width') || 0;
    const height = prompt('Please insert board height') || 0;
    this.setState({ width, height })
  }

  // renderHorizontal() {
  //   return <div style={{ 'width': '50px', 'height': '50px','background':'#ddd','marginRight':'1px' }}></div>
  // }
  
  // renderVertical() {
  //   return <div style={{ 'width': '50px', 'height': '50px','background':'#ddd','marginRight':'1px' }}></div>
  // }

  render() {
    const { width, height } = this.state;
    return (
      <div>
        <h3>width:{width} height:{height}</h3>
        <Containor width={width} height={height}/>
        {/* {this.renderHorizontal()} */}
      </div>
    );
  }
}

export default App;
