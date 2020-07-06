import React, { Component } from 'react';
import App from './App';

class ProductWheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  buttonClick = () => {
    this.props.toggleShowHooverMax();
}
  render() {
    return (
      <div className="Productwheel">
          <div class="wheel">
                <div>
                  <img src= "thepegasus.png" alt= "The Pegasus" class="productimage"/> <br></br>
                  <h5 class="producttext"> The Pegasus v7   </h5> <h2> Sold out! </h2>
              </div>
              <div>
                  <img src= "hoovermaxpro.png" alt= "The Kirby" class="productimage"/>
                  <h5 class="producttext"> The Hoover Max Pro </h5> <s> $76.99 &nbsp;</s> <h2> $69.55 &nbsp; </h2>
                  <button className="btn" onClick={this.buttonClick} > Add to cart </button>
              </div>
              <div>
                  <img src= "thekirby.png" alt= "The Kirby" class="productimage"/>
                  <h5 class="producttext"> The Kirby 200  </h5> <h2> Sold Out! </h2>
              </div>
          </div>
      </div>
    );
  }
}

export default ProductWheel;