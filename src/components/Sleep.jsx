import React from 'react';
import PropTypes from "prop-types";



function Sleep(){
  const increaseSleepMeter = (event) => {
    alert("THANKS FOR SLEEPING ME!");
  }
  return (
    <div>
      <h3>Sleep for TAMAGOTCHIIIIIIIIIIIIIIIIII</h3>
      <button onClick={increaseSleepMeter}>SLEEP ME NOW</button>
    </div>
  );
}

export default Sleep;
