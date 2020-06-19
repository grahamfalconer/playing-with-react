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
                  <img src= "thepegasus.png" alt= "The Pegasus" class="productimage"/>
                  <code class="producttext"> The Pegasus v7   </code> <h2> Sold out! </h2>
              </div>
              <div>
                  <img src= "hoovermaxpro.png" alt= "The Kirby" class="productimage"/>
                  <code class="producttext"> The Hoover Max Pro   </code> <h2> $76.99 </h2>
                  <button className="btn" onClick={this.buttonClick} > Add to cart </button>
              </div>
              <div>
                  <img src= "thekirby.png" alt= "The Kirby" class="productimage"/>
                  <code class="producttext"> The Kirby 200  </code> <h2> Sold Out! </h2>
              </div>
          </div>
      </div>
    );
  }
}

export default ProductWheel;