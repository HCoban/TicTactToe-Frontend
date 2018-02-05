import React from 'react';
import { connect } from 'react-redux';
import CellList from './cell_list';
import MoveLog from './move_log';
import Header from './header';
import GameForm from './form';
import { requestGame } from '../actions/game_actions';

class GameShowBase extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let pathname = this.props.location.pathname.split("/")
    let id = pathname[pathname.length - 1]
    if (!this.props.game[id]) {
      let token = localStorage.getItem('token')
      this.props.requestGame(id);
    }
  }

  render() {
    let pathname = this.props.location.pathname.split("/")
    let gameId = pathname[pathname.length - 1]

    return(
      <div className="game-show">
        <Header gameId={gameId} />
        <CellList gameId={gameId} />
        <MoveLog gameId={gameId} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  requestGame: (id) => dispatch(requestGame(id))
})

const GameShow = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameShowBase)

export default GameShow;