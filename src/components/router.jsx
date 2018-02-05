import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Form from './form';
import GameShow from './game_show';
import GameForm from './form';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Form}/>
          <Route path="/games/:gameId" component={GameShow} />
        </div>
      </HashRouter>
    );
  }
}

export default AppRouter;