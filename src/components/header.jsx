import React from "react";
import { connect } from "react-redux";
import { hashHistory } from "react-router";

class HeaderBase extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToForm = this.redirectToForm.bind(this);
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
    switch(error) {
      case 422:
        return <h1>This move is invalid, cell already marked</h1>;
      case 401:
        return <h1>You are not allowed to play this game</h1>;
      default:
        return null
    }
  }

  redirectToForm() {
    hashHistory.push("/");
  }

  render() {
    return (
      <div className="header">
        <div className="button-container">
          <button onClick={this.redirectToForm}>Play New Game!</button>
        </div>
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
