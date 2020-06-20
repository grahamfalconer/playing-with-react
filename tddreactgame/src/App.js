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

    };
  }

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
    // console.log(event.target.name)
    // console.log(event.target.value)
  }

  toggleShowHooverMax = () => {
    this.state.showProductWheel ? this.setState({ showProductWheel: false, showHooverMax: true,  }) : this.setState({ showProductWheel: true, showHooverMax: false })
  }

  showHome = () => {
    this.setState({ showProductWheel: true, showHooverMax: false })
  }

  showSecretStore = () => {
    this.setState({
      showProductWheel: false,
      showHooverMax: false,
      showSecretStore: true
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
              <h2 class="producttext"> The Hoover Max Pro   </h2> <s> $76.99 </s> <br />
              <button id="homebutton" className="button" onClick={this.toggleShowHooverMax}> Back Home </button> <br />



              <div class="voucherEntry">
                <h3>Enter Voucher Code </h3>
                <form onSubmit={this.handleSubmit}>
                    <h3> <input type="text" placeholder="e.g. FREEHOOVER2020" name="voucherCode" onChange={this.handleInputChange}/> </h3>
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
            <div id="endmessage" >
                <img src="transparented.png"/>
                <p> Congratulations on finding me, <br/>
                I'm not an easy man to reach. <br/>
                  <br/>
                So then, what can I do for you? <br/>

                <p id="newIdentityOption"> - New Identity  </p>
                <p id="hooverMaxOption"> - One-way flights </p>
                <p id="oneWayFlights"> - The Hoover Max Pro </p>
                </p>
            </div>
      </div>
      )
    }
  }
}

export default App;



