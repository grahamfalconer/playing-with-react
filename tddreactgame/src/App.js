import React, { Component } from 'react';
import IdentityGenerator from './IdentityGenerator.js'
import Navbar from './Navbar.js'
import ProductWheel from './ProductWheel.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      showProductWheel: true,
      showHooverMax: false,
      showIdentityGenerator: false,
    };
  }

  toggleShowHooverMax = () => {
    this.state.showProductWheel ? this.setState({ showProductWheel: false, showHooverMax: true,  }) : this.setState({ showProductWheel: true, showHooverMax: false })
  }

  showHome = () => {
    this.setState({ showProductWheel: true, showHooverMax: false })
  }
  
  render() {
    if(this.state.showProductWheel){
      return (
        <div className="App">
            <div>
                <Navbar showHome={ this.showHome }/> <br />
                <ProductWheel toggleShowHooverMax={ this.toggleShowHooverMax }/>
            </div>
        </div>
      );
    }
else if(this.state.showHooverMax){
  return(
      <div className="App">
          <div>
              <Navbar showHome={ this.showHome } /> <br />
              <h3> The Hoover Max Pro ! </h3> <br />
              <img src= "hoovermaxpro.png" alt= "The Kirby" class="productimage"/> <br />
                  <code class="producttext"> The Hoover Max Pro   </code> <h2> $76.99 </h2> <br />
              <button id="homebutton" className="button" onClick={this.toggleShowHooverMax}> Back Home </button> <br />
              <div class="voucherEntry">
                <label> Enter Voucher Code: </label>
                <input type="text" class="inputbox"></input>
                <input type="submit"></input>
              </div>
          </div>
      </div>
      );
    }
  }
}

export default App;
