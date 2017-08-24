import React from 'react';
import PropTypes from "prop-types";



function Sleep(props){
  return (
    <div>
      <h3>Sleep for TAMAGOTCHIIIIIIIIIIIIIIIIII</h3>
      <button onClick={props.increaseSleep}>SLEEP ME NOW</button>
    </div>
  );
}

Sleep.propTypes = {
  increaseSleep: PropTypes.func
};

export default Sleep;
