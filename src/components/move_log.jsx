import React from 'react';
import { connect } from 'react-redux';

class MoveLogBase extends React.Component {
  constructor(props) {
    super(props);
  }

  logText(singleMove) {
    let value = this.props.cells[singleMove];
    let player = (value === "X") ? 1 : 2;
    
    return `Player ${player} marked ${singleMove}`;
  }

  render() {
    let moves = this.props.move.map(singleMove => {
      return (
        <li key={singleMove}>{this.logText(singleMove)}</li>
      );
    });

    return (
      <div className="move-log">
        {moves}        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  move: state.move,
  cells: state.cells
});

const MoveLog = connect(
  mapStateToProps,
  null
)(MoveLogBase);

export default MoveLog;