import React from 'react';

const Counter = (props) => {
	return <p>Guess #<span id="count">{props.numOfGuesses}</span>!</p>
}

module.exports = Counter;