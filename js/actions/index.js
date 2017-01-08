const fetch = require('isomorphic-fetch');

const targetGenerator = function() {
	return Math.floor((Math.random() * 100) + 1)
};

const USER_GUESS = "USER_GUESS";
const addUserGuess = (guess) => {
	return {
		type: USER_GUESS,
		guess: guess
	}
}

const NEW_GAME = "NEW_GAME";
const newGame = () => {
	return {
		type: NEW_GAME,
		target: targetGenerator(),
		fewest: fetchFewest()
	} 
}

const FETCH_FEWEST_SUCCESS = "FETCH_FEWEST_SUCCESS";
const fetchFewestSuccess = (fewest) => {
	return {
		type: FETCH_FEWEST_SUCCESS,
		fewest: fewest
	}
}

const FETCH_FEWEST_ERROR = "FETCH_FEWEST_ERROR";
const fetechFewestError = (error) => {
	return {
		type: FETCH_FEWEST_ERROR,
		error: error
	}
}

const fetchFewest = () => {
	return (dispatch) => {
		const url = 'http://localhost:5000/fewest';
		return fetch(url).then((res) => {
			if(res.status < 200 || res.status >= 300) {
				const error = new Error(res.statusText);
				error.response = res;
				throw error;
			}
			return res
		})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			const fewest = data.fewest;
			return dispatch(
				fetchFewestSuccess(fewest)
			);
		})
		.catch((error) => {
			return dispatch(
				fetechFewestError(error)
			);
		})
	}
}

const postFewest = (newFewest) => {
	return (dispatch) => {
		const url = 'http://localhost:5000/fewest';
		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				fewest: newFewest
			})
		})
		.then(() => {
			return dispatch(fetchFewestSuccess(newFewest));
		});
	}
}


exports.targetGenerator = targetGenerator;

exports.addUserGuess = addUserGuess;
exports.USER_GUESS = USER_GUESS;

exports.newGame = newGame;
exports.NEW_GAME = NEW_GAME;

exports.fetchFewestSuccess = fetchFewestSuccess;
exports.FETCH_FEWEST_SUCCESS = FETCH_FEWEST_SUCCESS;

exports.fetechFewestError = fetechFewestError;
exports.FETCH_FEWEST_ERROR = FETCH_FEWEST_ERROR;

exports.fetchFewest = fetchFewest;

exports.postFewest = postFewest;