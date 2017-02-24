/*import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));*/


import React from 'react';
import { render } from 'react-dom';

import Root from './containers/Root.jsx';
import store from './store/index';

render(
  <Root store={store} />,
  document.querySelector('.container')
);