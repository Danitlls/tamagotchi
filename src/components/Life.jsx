import React from 'react';
import Food from './Food';
import Sleep from './Sleep';
import Play from './Play';

class Life extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h1>Welcome to LIFE</h1>
        <Food/>
        <Sleep/>
        <Play/>
      </div>
    );
  }
}

export default Life;
