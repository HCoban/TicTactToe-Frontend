import React from 'react';
import { connect } from 'react-redux';

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="cell">
        <button></button>
      </div>
    );
  }
}

export default Cell;