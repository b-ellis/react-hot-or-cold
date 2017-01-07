import actions  from '../actions/index';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

const State = {
	target: actions.targetGenerator(),
	guess: actions.guess,
	guesses: [],
	feedback: 'Make Your Guess',
	fewestguess: actions.fewest
}

const guessingReducer = (state, action) => {
	state = state || State;

	switch(action.type) {
		case actions.USER_GUESS:
		const newState = Object.assign({}, state, {
			guess: action.guess,
			guesses: state.guesses.concat([action.guess]),
		});
		//Feedback
		if(newState.guess.userGuess == newState.target) {
			newState.feedback = 'You Won!';
			newState.fewestguess = newState.guesses.length;
		} else if(newState.guess.userGuess <= newState.target + 10 && newState.guess.userGuess >= newState.target - 10) {
				newState.feedback = "Hot";
			} else {
					if(newState.guess.userGuess <= newState.target + 15 && newState.guess.userGuess >= newState.target - 15) {
						newState.feedback = "Kinda Hot";
					}
					else {
						if(newState.guess.userGuess <= newState.target + 20 && newState.guess.userGuess >= newState.target - 20) {
							newState.feedback = "Cold";
						}
						else {
							if(newState.guess.userGuess <= newState.target + 30 && newState.guess.userGuess >= newState.target - 30) {
									newState.feedback = "Ice Cold";
							}
							else {
								newState.feedback = "Way too far !";
							}
						}
					}
				}
		return newState;

		case actions.NEW_GAME:
		const constState = Object.assign({}, state, {
			target: actions.targetGenerator(),
			guesses: [],
			feedback: 'Make Your Guess',
			fewestguess: state.fewest
		})
		return constState;

		case actions.FETCH_FEWEST_SUCCESS:
		const fewState = Object.assign({}, state, {
			fewestguess: action.fewest
		});
		return fewState;
	}
	return state;
}

const reducer = combineReducers({
	guessing: guessingReducer,
	form: formReducer
});

exports.reducer = reducer;