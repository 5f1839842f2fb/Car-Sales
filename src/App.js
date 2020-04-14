import React from 'react';
import { connect } from 'react-redux'
import { addFeature, removeFeature } from './rootreducer'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  const state = {
    additionalPrice: props.additionalPrice,
    car: props.car,
    additionalFeatures: props.additionalFeatures
  };

  const removeFeature = id => {
    // dispatch an action here to remove an item
    props.removeFeature(id)
  };

  const buyItem = id => {
    // dipsatch an action here to add an item
    props.addFeature(id)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} sellItem={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} buyItem={buyItem}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App)
