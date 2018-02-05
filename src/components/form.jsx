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
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field
          component="input"
          name="playerOneName"
          type="text"
        />
        <Field
          component="input"
          name="playerTwoName"
          type="text"
        />
        <button action="submit">Start Game!</button>
      </form>
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