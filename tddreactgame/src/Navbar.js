import React, { Component } from 'react';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  logoClick = () => {
    this.props.showHome();
  }

  aboutUsClick = () => {
    this.props.showAboutUs();
  }
  
  render() {
    return (
      <div className="Navbar">
          <div className="toppage">
              <h1 className="navbaritem" onClick={this.logoClick}> Best Quality Vacuum </h1> <h4 onClick={this.aboutUsClick} className="navbaritem"> About us </h4>
          </div>
      </div>
    );
  }
}

export default Navbar;