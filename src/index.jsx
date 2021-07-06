import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store, history } from './store';

// import { ConnectedRouter } from "react-router-redux";

import './i18n';
import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,

  document.getElementById('root'),
);
