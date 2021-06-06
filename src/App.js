import React from 'react'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'

import index from './reducer/index';
import INFO from './components/INFO'
import UserAgent from './components/UserAgent';

const store = createStore(index, applyMiddleware(thunk, logger))

class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <INFO />
      <UserAgent />
    </Provider>
    );
  }
}

export default App;
