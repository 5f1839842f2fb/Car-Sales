import React from 'react';

const AdditionalFeature = props => {
  const clickFunction = event => {
    props.buyItem(props.feature.id)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={clickFunction}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
