import React, { Component } from 'react';

class Head extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <img src="http://via.placeholder.com/100x100" />
      </div>
    );
  }
}

export default Head;
