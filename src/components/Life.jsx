import React from "react";
import Food from "./Food";
import Sleep from "./Sleep";
import Play from "./Play";
import CreatureModel from "../models/creature";


class Life extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      creature: new CreatureModel()
    };
    console.log(this.state.creature.sleep);
    this.increaseSleep = this.increaseSleep.bind(this);
  }

  increaseSleep(){
    let newCreatureSleep = this.state.creature;
    if (newCreatureSleep.sleep < 51){
      newCreatureSleep.sleep += 50;
      this.setState({creature: newCreatureSleep});
    }
    else if (newCreatureSleep.sleep < 100){
      newCreatureSleep.sleep += (100 - newCreatureSleep.sleep);
      this.setState({creature: newCreatureSleep});
    }
    console.log(newCreatureSleep.sleep);
  }

  sleepDecrease(){
    this.state.creature.sleep -= 20;
    console.log(this.state.creature.sleep);
    if (this.state.creature.sleep < 1){
      this.state.creature.dead = true;
      console.log("you killed me");
    }
  }

  componentDidMount() {
   console.log("componentDidMount");
   if (this.state.creature.sleep > 0 ){
     this.sleepCountdown = setInterval(() =>
       this.sleepDecrease(),
       5000
     );
   }
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
