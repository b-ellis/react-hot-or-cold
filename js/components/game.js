import React from 'react';
import { connect } from 'react-redux';

import store from '../store';
import actions from '../actions/index';

import Feedback from './feedback';
import Form from './form';
import GuessList from './guesslist';
import Counter from './counter';


class Game extends React.Component {
	constructor(){
		super();
		this.addUserGuess = this.addUserGuess.bind(this);
	}
	addUserGuess(guess){
		this.props.dispatch(actions.addUserGuess(guess));
	}
	render(){
		// console.log(this.props.state);
		// const counter = () => {
		// 	if(this.)
		// }
		return(
			<section className='game'>
				<Feedback feedback={this.props.state.feedback} />
				<Form onSubmit={this.addUserGuess}/>
				<Counter numOfGuesses={this.props.state.guesses.length} />
				<GuessList guesses={this.props.state.guesses} />
			</section>
		)
	}
}

const mapStateToProps = (state, props) => {
	return{
		state
	}
} 

const Container = connect(mapStateToProps)(Game)

module.exports = Container;


