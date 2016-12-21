const targetGenerator = function() {
	return Math.floor((Math.random() * 100) + 1)
};

const USER_GUESS = "USER_GUESS";
const addUserGuess = (guess) => {
	return {
		type: USER_GUESS,
		guess: guess
	}
};

const NEW_GAME = "NEW_GAME";
const newGame = () => {
	return {
		type: NEW_GAME,
		target: targetGenerator()
	} 
}

exports.targetGenerator = targetGenerator;

exports.addUserGuess = addUserGuess;
exports.USER_GUESS = USER_GUESS;

exports.newGame = newGame;
exports.NEW_GAME = NEW_GAME;