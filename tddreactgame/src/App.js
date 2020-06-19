import React, { Component } from 'react';
import IdentityGenerator from './IdentityGenerator.js'
import Navbar from './Navbar.js'
import ProductWheel from './ProductWheel.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      showProductWheel: true,
      showPegasus: false,
      showIdentityGenerator: false,
    };
  }
  
  render() {
    return (
      <div className="App">
          <div>
              <Navbar /> <br />
              <ProductWheel />
          </div>
      </div>
    );
  }
}

export default App;
