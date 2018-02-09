import React from "react";
import { connect } from "react-redux";

class HeaderBase extends React.Component {
  constructor(props) {
    super(props);
  }

  gameOverText() {
    let game = this.props.games[this.props.gameId];
    if (!game) {
      return null;
    }
    let lastPlayer =
      Object.keys(this.props.cells).length % 2 === 0
        ? game.playerTwo
        : game.playerOne;
    if (game && game.completed) {
      if (game.winner) {
        return (
          <div>
            <h1>Game Over</h1>
            <h2>{`${lastPlayer} won`}</h2>
          </div>
        );
      } else {
        return (
          <div>
            <h1>Game Over</h1>
          </div>
        );
      }
    }
  }

  playerInfo() {
    let game = this.props.games[this.props.gameId];
    if (!game || game.completed) {
      return null;
    }

    let currentPlayer =
      Object.keys(this.props.cells).length % 2 === 0
        ? game.playerOne
        : game.playerTwo;
    if (!game.completed) {
      return <h1>{`${currentPlayer}'s turn`}</h1>;
    }
  }

  renderError() {
    let error = this.props.error;
    if (error && error === "Unauthorized") {
      return <h1>You are not allowed to play this game</h1>;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="header">
        {this.renderError()}
        {this.gameOverText()}
        {this.playerInfo()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  games: state.game,
  cells: state.cells,
  error: state.error
});

const Header = connect(mapStateToProps, null)(HeaderBase);

export default Header;
