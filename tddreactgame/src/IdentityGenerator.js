import React, { Component } from 'react';

class IdentityGenerator extends Component {

  state = {
    loading: true,
    newIdentity : null
  }
  async componentDidMount(){
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    console.log(data.results[0]);
  }

  render() {
    return (
      <div className="IdentityGenerator">
        {this.state.loading || !this.state.person ? (
        <div> Loading </div>
          ) : (
        <div>
            <h3> Random Identity Generator </h3>
            { this.state.person.name.title + " " + this.state.person.name.first + " " + this.state.person.name.last} <br />
            { "Age: " + this.state.person.dob.age} <br />
            <img src= {this.state.person.picture.large} alt={this.state.person.name.first} /> < br/>
            { "Born on " + this.state.person.dob.date } <br />
            { this.state.person.location.street.number + ", " + this.state.person.location.street.name + " - " + this.state.person.location.postcode} <br />
            { this.state.person.location.city + ", " + this.state.person.location.state + ", " + this.state.person.location.country } <br />
        </div>
          )}
      </div>
    );
  }
}

export default IdentityGenerator;
