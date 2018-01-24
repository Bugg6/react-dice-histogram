import React, { Component } from 'react';
import Dice from './Dice';
import Histogram from './ChartContainer';

class App extends Component {


    constructor(props) {
      super(props)
      this.state = {
        die1: 0,
        die2: 0,
        total: 0,
        rolls: [['Roll No.', 'Total']]
      }
      this.rollDice = this.rollDice.bind(this);
    }
    rollDice() {
      let d1 = Math.floor(Math.random() * 6) + 1;
      let d2 = Math.floor(Math.random() * 6) + 1;
      let total = d1 + d2;
      let nextRollId = this.state.rolls.length;
      let newRoll = this.state.rolls.slice();
      let addRoll = [
        `Roll ${nextRollId}`,
        total
        ]
      newRoll.push(addRoll)


      this.setState({
        die1: d1,
        die2: d2,
        total: total,
        rolls: newRoll
      })
    }

    render() {
      console.log(this.state.rolls);


      return(
        <div>
          <div>
          <Histogram
            rollData={this.state.rolls}
          />
          </div>
          <div className='dice-bar'>
            <Dice
            value={this.state.die1}
            />
            <Dice
            value={this.state.die2}
            />
          <p>The Total is {this.state.total}</p>
        <button id='roll-dice' onClick={this.rollDice}> Roll Dice </button>
          </div>
    </div>

      )
    }
  }


  export default App;
