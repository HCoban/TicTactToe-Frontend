import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createGame } from '../actions/game_actions';

class GameFormBase extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    let token = localStorage.getItem('token');
    let games = this.props.game
    Object.keys(games).forEach((gameId) => {
      if (games[gameId].token === token) {
        this.props.history.push(`/games/${gameId}`)
      }
    });
  }

  handleFormSubmit(formProps) {
    this.props.createGame(formProps)
  }

  render () {
    const { handleSubmit, game } = this.props;

    return (
      <div className="form-component">
        <h1>
          TICTACTOE
        </h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="fields">
            <label>
              <span>Player 1 Name</span>
              <Field
                component="input"
                name="playerOneName"
                type="text"
                />
            </label>
            <label>
              <span>Player 2 Name</span>
              <Field
                component="input"
                name="playerTwoName"
                type="text"
                />
            </label>
          </div>
          <div className="button-container">
            <button action="submit">Start Game!</button>
          </div>
        </form>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  game: state.game
}); 

const mapDispatchToProps = dispatch => ({
  createGame: (players) => dispatch(createGame(players))
});

const gameReduxForm = reduxForm({
  form: 'gameForm',
  fields: ['playerOneName', 'playerTwoName'],
})(GameFormBase);

const GameForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(gameReduxForm);

export default GameForm;