import React from 'react';
import { connect } from 'react-redux';
import { sortBy} from 'underscore';

class MoveLogBase extends React.Component {
  constructor(props) {
    super(props);
  }

  logText(cellId) {
    let cell = this.props.cells[cellId];
    if (!cell) { return null }
    let game = this.props.games[this.props.gameId]
    let player = (cell.value === "X") ? game.playerOne : game.playerTwo;
    let step = cell.step
    
    return `${step}: ${player} marked ${cellId}`;
  }

  render() {
    let game = this.props.games[this.props.gameId]
    if (!game) { return null; }
    let cellIds = sortBy(Object.keys(this.props.cells), (key) => {
      this.props.cells[key].step
    });

    let moves = cellIds.map((cellId) => {
      return (
        <li key={cellId}>{this.logText(cellId)}</li>
      );
    })

    return (
      <div className="move-log">
        {moves}        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cells: state.cells,
  games: state.game
});

const MoveLog = connect(
  mapStateToProps,
  null
)(MoveLogBase);

export default MoveLog;