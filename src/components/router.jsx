import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Form from './form';
import GameShow from './game_show';
import GameForm from './form';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <div>
          <Route exact path="/" component={Form}/>
          <Route path="/games/:gameId" component={GameShow} />
        </div>
      </Router>
    );
  }
}

export default AppRouter;