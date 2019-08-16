import React from 'react';
import { connect } from "react-redux";

const Smurf = props => {
  return (
    <div>
      <p>{props.smurf.name} is {props.smurf.age} years old and has {props.smurf.height} height.</p>
      <button>Edit The Villager</button>
      <button>Delete The Villager</button>
    </div>
  );
};

export default connect(null, {})(Smurf);