import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

import '../styles/dashboard.css';
import '../styles/layout.css';
import { Footerlanding } from './Footer';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    //console.log(this.LoggedIn);
    let LoggedIn = Boolean(this.props.auth);
    //let LoggedIn = true;

    return (
      <main className={LoggedIn ? 'loggedIn' : 'layout'}>
        <Fragment>
          <div className="container">
            <BrowserRouter>
              <div>
                <Header />
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
              </div>
            </BrowserRouter>
          </div>
          <Footerlanding />
        </Fragment>
      </main>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
