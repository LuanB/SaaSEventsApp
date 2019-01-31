import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello from react</h1>

        <p>
          <a href="/auth/google">Sign In with Google</a>
        </p>
      </div>
    );
  }
}

export default App;
