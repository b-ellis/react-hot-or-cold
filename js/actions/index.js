const targetGenerator = function() {
	return Math.floor((Math.random() * 100) + 1)
};

const RANDOM_NUMBER = "RANDOM_NUMBER";
const selectRandomNumber = function() {
	return {
		type: RANDOM_NUMBER,
		target: targetGenerator()
	}
};

const USER_GUESS = "USER_GUESS";
const addUserGuess = function(guess) {
	return {
		type: USER_GUESS,
		guess: guess
	}
};

exports.targetGenerator = targetGenerator;

exports.addUserGuess = addUserGuess;
exports.USER_GUESS = USER_GUESS;

exports.selectRandomNumber = selectRandomNumber;
exports.RANDOM_NUMBER = RANDOM_NUMBER;