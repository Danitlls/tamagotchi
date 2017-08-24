import React from 'react';
import Food from './Food';
import Sleep from './Sleep';
import Play from './Play';
import CreatureModel from "../models/creature";


class Life extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      creature: new CreatureModel()
    }
    console.log(this.state.creature);
  }

  increaseSleep(){
    alert("THANKS FOR SLEEPING ME!");
  }
  render(){

    return (
      <div>
        <h1>Welcome to LIFE</h1>
        <Sleep increaseSleep = {this.increaseSleep}/>
        <Food/>
        <Play/>
      </div>
    );
  }
}

export default Life;
