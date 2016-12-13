require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';

// import store from './store';
import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<App />, document.getElementById('app'));
});