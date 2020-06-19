import React, { Component } from 'react';
import App from './App';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  logoClick = () => {
    this.props.showHome();
}

  render() {
    return (
      <div className="Navbar">
          <div class="toppage">
              <h1 class="navbaritem" onClick={this.logoClick}> Best Quality Vacuum </h1> <h4 class="navbaritem"> About us </h4>
          </div>
      </div>
    );
  }
}

export default Navbar;