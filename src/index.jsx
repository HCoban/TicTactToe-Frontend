import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './components/router';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={configureStore()}>
      < AppRouter/>
    </Provider>,
    document.getElementById('root')
  );
});