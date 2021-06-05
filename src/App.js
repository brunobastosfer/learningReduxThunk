import React from 'react'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'

import { reducer } from './reducer/reducer'
import INFO from './components/INFO'

const store = createStore(reducer, applyMiddleware(thunk, logger))

class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <INFO />
    </Provider>
    );
  }
}

export default App;
