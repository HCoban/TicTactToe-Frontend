import React from "react";
import { connect } from "react-redux";
import { createMove } from "../actions/move_actions";

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(positionString, cell) {
    let game = this.props.game[this.props.gameId];
    if (!game) {
      return null;
    }

    if (!game.completed) {
      let currentPlayer =
        Object.keys(this.props.cells).length % 2 === 0 ? 1 : 2;
      let moveParams = {
        move: positionString,
        value: currentPlayer,
        token: localStorage.getItem("token")
      };
      this.props.createMove(moveParams);
    }
  }

  render() {
    const { cells, i, j } = this.props;

    let positionString = POSITIONS[`${i}${j}`];
    let cell = cells[positionString];

    return (
      <div className="cell" onClick={() => this.handleClick(positionString, cell)}>
        <span>{cell && cell.value}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cells: state.cells,
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  createMove: moveParams => dispatch(createMove(moveParams))
});

const Cell = connect(mapStateToProps, mapDispatchToProps)(CellBase);

export default Cell;
