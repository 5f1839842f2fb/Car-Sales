import React from 'react';

const AddedFeature = props => {
  const clickFunction = event => {
    props.sellItem(props.feature.id)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={clickFunction}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
