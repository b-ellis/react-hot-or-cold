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
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(guess){
		this.props.dispatch(actions.addUserGuess(guess));
	}
	render(){
		return(
			<section className='game'>
				<Feedback feedback={this.props.state.guessing.feedback} />
				<Form onSubmit={this.handleSubmit} />
				<Counter numOfGuesses={this.props.state.guessing.guesses.length} />
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


