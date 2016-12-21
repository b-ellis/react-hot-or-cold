// var redux = require('redux');
import { createStore } from 'redux'

import reducers from './reducers/index';

const store = createStore(reducers.guessingReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

module.exports = store;