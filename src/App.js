import React, { Component } from 'react';
import IdentityGenerator from './IdentityGenerator.js'
import Navbar from './Navbar.js'
import ProductWheel from './ProductWheel.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voucherCode : '',
      showProductWheel: true,
      showHooverMax: false,
      showSecretStore: false,
      showNewIdentity: false,
    };
  }

  // Best Quality Vacuums Storefront
  toggleShowHooverMax = () => {
    this.state.showProductWheel ? this.setState({ showProductWheel: false, showHooverMax: true,  }) : this.setState({ showProductWheel: true, showHooverMax: false })
  }
  showHome = () => {
    this.setState({ showProductWheel: true, showHooverMax: false })
  }

  // "The Disappearers secret store"
  showSecretStore = () => {
    this.setState({
      showProductWheel: false,
      showHooverMax: false,
      showSecretStore: true
    })
  }
  toggleShowNewId = () => {
    this.setState({ 
    showSecretStore: false,
    showNewIdentity: true,
    showHooverMax: false,
    showProductWheel: false
    })
  }

  // Voucher Submission
  handleSubmit = (event) => {
    event.preventDefault();
    let specialCode = 'El Camino'
    if (this.state.voucherCode === specialCode){
      this.showSecretStore()
      }
    }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { voucherCode } = this.state.voucherCode
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
              <img src= "hoovermaxpro.png" alt= "Hoover Max" class="productimage"/> <br />
              <h2 class="producttext"> The Hoover Max Pro   </h2> <s> $76.99 </s> <h3>$69.55</h3><br />
              <button id="homebutton" className="button" onClick={this.toggleShowHooverMax}> Back Home </button> <br />
              <div class="voucherEntry">
                <form onSubmit={this.handleSubmit}>
                    <h3>Enter Voucher Code </h3>
                    <h3> <input maxlength="10" type="text" placeholder="e.g. This Sucks" name="voucherCode" onChange={this.handleInputChange}/> </h3>
                    <h3> <button> Enter </button> </h3>
                </form>
              </div>
          </div>
      </div>
      );
    }

    else if(this.state.showSecretStore){
      return(
      <div >
            <div id="endmessage">
                <img id="theDisappearer" src="transparented.png"/>
                <p> Congratulations on finding me, <br/>
                I'm not an easy man to reach. <br/>
                  <br/>
                So then, what can I do for you? <br/>
                </p>

                <p class="consoleStyle">
                <p id="newIdentityOption" onClick={this.toggleShowNewId}> - New Identity  </p>
                <p id="hooverMaxOption"> - One-way flights </p>
                <p id="oneWayFlights"> - The Hoover Max Pro </p>
                </p>
            </div>
      </div>
      )
    }
    else if(this.state.showNewIdentity){
      return(
        <div >
              <div id="endmessage" >
                      <div>
                      <p> There you go...</p>
                      <IdentityGenerator/>
                      </div>
                  <p class="consoleStyle">
                  <p>Anything else? </p>
                  <p id="hooverMaxOption"> - One-way flights </p>
                  <p id="oneWayFlights"> - The Hoover Max Pro </p>
                  </p>
              </div>
        </div>
        )
    }
    else if(this.state.showAboutus){
      return(
        <div>
          <h1> About us </h1>

        </div>
      )
    }
  }
}

export default App;



