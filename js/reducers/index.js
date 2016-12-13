import actions  from '../actions/index';

const newState = () => {
	return {
		target: actions.targetGenerator(),
		guesses: [],
		// feedback: 
	}
}

const guessingReducer = (state, action) => {
	state = newState;
// 	switch(action.type) {
// 		case actions.RANDOM_NUMBER
		
// 		case actions.USER_GUESS
// 	}
}

exports.guessingReducer = guessingReducer;