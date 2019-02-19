import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CreateSurvey extends Component {
  render() {
    return <button className="btn">Create New Survey</button>;
  }
}

export default connect(
  null,
  actions
)(CreateSurvey);
