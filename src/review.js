import React, { Component } from 'react';
import logo from './logo.svg';



class Movie extends Component {
  render() {
    return (
      <div>
          <h3>Review</h3>
          <p>
{this.props.description}
          </p>
      </div>
    );
  }
}

export default Movie;
