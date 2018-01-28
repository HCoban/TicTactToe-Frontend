import React from 'react';
import { connect } from 'react-redux';
import { createMove } from '../actions/move_actions';

const POSITIONS = {
  "00": "A1",
  "01": "A2",
  "02": "A3",
  "10": "B1",
  "11": "B2",
  "12": "B3",
  "20": "C1",
  "21": "C2",
  "22": "C3" 
};

class CellBase extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      move,
      cells,
      i,
      j
    } = this.props;

    let currentPlayer = (move.length % 2 === 0) ? 'X' : 'O';
    let positionString = POSITIONS[`${i}${j}`];
    let value = cells[positionString];

    return(
      <div className="cell" onClick={() => this.props.createMove(move, currentPlayer)}>
        <span>{value}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    move: state.move,
    cells: state.cells
});

const mapDispatchToProps = dispatch => ({
  createMove: (move, value) => dispatch(createMove(move, value))
});

const Cell = connect(
  mapStateToProps,
  mapDispatchToProps
)(CellBase);

export default Cell;