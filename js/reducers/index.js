import actions  from '../actions/index';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

const State = {
	target: actions.targetGenerator(),
	guess: actions.guess,
	guesses: [],
	feedback: 'Make Your Guess'
}

const guessingReducer = (state, action) => {
	state = state || State;
	form: formReducer
	// console.log(state);

	switch(action.type) {
		case actions.USER_GUESS:
		const newState = Object.assign({}, state, {
			guess: action.guess,
			guesses: state.guesses.concat([action.guess]),
		});
		//validation
		validation(newState);
		//Feedback
		if(newState.guess == newState.target) {
			newState.feedback = 'You Won!'
		} else if(newState.guess <= newState.target + 10 && newState.guess >= newState.target - 10) {
				newState.feedback = "Hot";
			} else {
					if(newState.guess <= newState.target + 15 && newState.guess >= newState.target - 15) {
						newState.feedback = "Kinda Hot";
					}
					else {
						if(newState.guess <= newState.target + 20 && newState.guess >= newState.target - 20) {
							newState.feedback = "Cold";
						}
						else {
							if(newState.guess <= newState.target + 30 && newState.guess >= newState.target -30) {
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
		const constState = () => {
			const newTarget = actions.targetGenerator();
			return {
				target: newTarget,
				guesses: [],
				feedback: 'Make Your Guess'
			}
		}
		return constState();
	}
	return state;
}

const validation = (state) => {
		if(state.guess % 1 !== 0 || state.guess === ''){
			state.feedback = 'Please input a number';
			return;
		}
		if(state.guess < 0 ||state.guess > 100){
			state.feedback = 'Please input a number between 1 and 100';
			return;
		}
}

const reducer = combineReducers({
	form: formReducer
});

exports.reducer = reducer
exports.guessingReducer = guessingReducer;