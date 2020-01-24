import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from '../actions/featureActions';

const AdditionalFeature = props => {
  // console.log(props, 'additionalFeature line 7')
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" 
      onClick={() => props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   return {

//   }
// }

export default connect(
  null,
  { addFeature }
)(AdditionalFeature);


