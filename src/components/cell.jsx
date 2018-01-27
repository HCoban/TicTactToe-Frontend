import React from 'react';
import { connect } from 'react-redux';

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="cell">
        <span></span>
      </div>
    );
  }
}

export default Cell;