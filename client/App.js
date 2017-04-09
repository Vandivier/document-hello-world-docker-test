/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import IntlWrapper from './containers/Intl/IntlWrapper';

// Import Routes
import routes from './routes';

// Base stylesheet
require('./main.css');

export default function App(props) {
  return (
    <Provider store={props.store}>
      <IntlWrapper>
        <Router history={browserHistory} CONSTS={props.store.CONSTS}>
          {routes}
        </Router>
      </IntlWrapper>
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
