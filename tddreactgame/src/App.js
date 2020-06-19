import React, { Component } from 'react';
import IdentityGenerator from './IdentityGenerator.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
              <h1> Best Quality Vacuum </h1>
              <IdentityGenerator />
          </div>
      </div>
    );
  }
}

export default App;
