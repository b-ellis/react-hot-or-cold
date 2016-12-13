import redux from 'redux';

const creatStore = redux.creatStore;

import reducers from './reducers/index';

const store = creatStore(reducers.guessingReducer);

module.exports = store;