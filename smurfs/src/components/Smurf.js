import React from 'react';

const Smurf = props => {
  return (
    <div>
      <p>{props.smurf.name} is {props.smurf.age} years old and has {props.smurf.height} height.</p>
    </div>
  );
};

export default Smurf;