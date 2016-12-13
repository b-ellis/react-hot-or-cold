import React from 'react';

class Game extends React.Component {
	render(){
		return(
			<section className='game'>
				<Feedback />
				<Form />
				<Counter />
				<GuessList />
			</section>
		)
	}
} 

const Feedback = (props) => {
	return <h2 id="feedback">Make your Guess!</h2>
}

class Form extends React.Component {
	render(){
		return(
			<div>
				<form>
					<input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required/>
	      			<input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
				</form>
			</div>
		)
	}
};

const Counter = () => {
	return <p>Guess #<span id="count">0</span>!</p>
}

const GuessList = () => {
	const guesses = [];
	return (
		<ul id="guessList" className="guessBox clearfix">

		</ul>
	)
}

module.exports = Game;