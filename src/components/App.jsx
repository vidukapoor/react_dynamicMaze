/**
 * @author vishwadeep
 */
import React, { Component } from 'react';
import Containor from './Containor.jsx';

const alignCenter = { 'textAlign': 'center' };
class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = { width: 0, height: 0, mazeSize: 0 };
    this.alertCount = 0;
  }

  /**
   * @func react life cycle
   * @desc before component mount
   */
  componentWillMount() {
    this.handleInput();
  }

  /**
   * @func react life cycle
   * @desc after component mount
   */
  componentDidMount() {
    this.handleMount();
  }

  /**
   * @event handleInput 
   * @desc Gets the value from the promt box and sets to a {state}
   */
  handleInput() {
    let width = prompt('Please insert board width') || 5;
    let height = prompt('Please insert board height') || 5;
    height = !isNaN(height) && Number(height);
    width = !isNaN(width) && Number(width);
    if (!height || !width) {
      alert('Input only Numbers');
      return this.handleInput();
    }
    const mazeSize = height * width;
    const mazeArray = Array.from(Array(mazeSize)).map((arg, index) => index)
    this.setState({ width, height, mazeArray })
  }

  handleMount() {
    const { width, height, mazeArray } = this.state;
    let matrix = document.getElementById('app');
    matrix.style.height = 60 * height + 'px';
    matrix.style.width = 60 * width + 'px';
    matrix.style.margin= '20px auto';
    const shuffleArray = this.getShuffleArray(mazeArray);
    const randomArray = this.getRandomArray(shuffleArray);
    const uniqueToySlot = this.getUniqueToySlot(shuffleArray, randomArray);
    this.insertFood(randomArray);
    this.insertToy(uniqueToySlot);
  }

  getUniqueToySlot(shuffleArray, randomArray) {
    const uniqueSlot = shuffleArray.filter(item => randomArray.indexOf(item) === -1);
    return uniqueSlot[Math.floor(Math.random() * uniqueSlot.length)];
  }

  /**
   * @desc passig the food to the inner html
   * @param {array} randomArray 
   */
  insertFood(randomArray) {
    for (let i = 0; i < randomArray.length; i++) {
      const elem_position = document.getElementById(randomArray[i]);
      elem_position.innerHTML = "<img src='../../public/assests/food.svg' alt='food'/>";
      elem_position.classList.toggle('food');
    }
  }

  /**
   * @desc passing toy to the inner html
   * @param {array} slotNumber 
   */
  insertToy(slotNumber) {
    const toyPosition = document.getElementById(slotNumber);
    toyPosition.classList.toggle('toy');
    toyPosition.innerHTML = "<img src='../../public/assests/toyRobot.svg' alt='toy'/>";
  }

  /**
   * @desc making the random array
   * @param {array} array 
   */
  getShuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  getRandomArray(array) {
    return array.slice(0, parseInt(array.length / 3, 10))
  }

  /**
   * @func handleKeyPress()
   * @param {key} event 
   * @todo toy to be moved using this @func
   * @default console
   * @emits keyCode
   */
  handleKeyPress(event) {
    const { width } = this.state;
    switch (event.keyCode) {
      case 87:
        this.handleUpKey(width);
        break;
      case 65:
        this.handleLeftKey(width);
        break;
      case 83:
        this.handleDownKey(width);
        break;
      case 68:
        this.handleRightKey(width);
        break;
      default:
        console.log(event.keyCode);
    }
    this.checkEndGame();
  }

  /**
   * @desc checking the food count is over or not
   */
  checkEndGame() {
    const checkFoodCount = document.getElementsByClassName('food');
    if (checkFoodCount.length === 0) {
      this.alertCount = 1;
      if(this.alertCount){
        setTimeout(() => {
          this.alertCount = 0;
          if (confirm('Restart Game') === true) {
            window.location.reload();
          }
        }, 500);
      }
    }
  }

  /**
   * @desc specific @func to handle up key
   * @param {integer} width 
   */
  handleUpKey(width) {
    const toy = document.getElementsByClassName('toy');
    let toySlotId = toy[0].id;
    let moveUp = parseInt(toySlotId, 10) - parseInt(width, 10);
    const move = document.getElementById(moveUp)
    if (move !== null) {
      this.updateDomOnMovement(toySlotId, move);
      toySlotId = toySlotId - width;
    }
  }

  /**
   * @desc specific @func to handle left key
   */
  handleLeftKey() {
    const toy = document.getElementsByClassName('toy');
    let toySlotId = toy[0].id;
    const move = document.getElementById(toySlotId - 1)
    if (move !== null) {
      this.updateDomOnMovement(toySlotId, move);
      toySlotId = toySlotId - 1;
    }
  }

  /**
   * @desc specific @func to handle down key
   * @param {integer} width 
   */
  handleDownKey(width) {
    const toy = document.getElementsByClassName('toy')
    let toySlotId = toy[0].id;
    const moveDown = parseInt(toySlotId, 10) + parseInt(width, 10)
    const move = document.getElementById(moveDown);
    if (move !== null) {
      this.updateDomOnMovement(toySlotId, move);
      toySlotId = toySlotId + width;
    }
  }

  /**
   * @desc specific @func to handle right key
   */
  handleRightKey() {
    const toy = document.getElementsByClassName('toy');
    let toySlotId = toy[0].id;
    let moveRight = parseInt(toySlotId, 10) + 1;
    const move = document.getElementById(moveRight);
    if (move !== null) {
      this.updateDomOnMovement(toySlotId, move);
      toySlotId = toySlotId + 1;
    }
  }

  /**
   * @desc updates the class in the dom
   * @param {number} toySlotId 
   * @param {html} move 
   */
  updateDomOnMovement(toySlotId, move) {
    if (move.classList.contains('food')) {
      move.classList.toggle('food')
    }
    move.innerHTML = document.getElementById(toySlotId).innerHTML;
    document.getElementById(toySlotId).innerHTML = '';
    document.getElementById(toySlotId).classList.toggle('toy');
    move.classList.toggle('toy');
  }

  /**
   * @return UI
   */
  render() {
    const { width, height } = this.state;
    return (
      <div onKeyDown={(event) => this.handleKeyPress(event)} tabIndex='0' style={alignCenter}>
        <h3>width:{width} height:{height}</h3>
        <Containor {...this.state} />
      </div>
    );
  }
}

export default App;
