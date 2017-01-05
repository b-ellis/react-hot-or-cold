import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form'

import store from '../store';
import actions from '../actions/index';

import Feedback from './feedback';
import Form from './form';
import GuessList from './guesslist';
import Counter from './counter';
import Fewest from './fewest';


class Game extends React.Component {
	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount(){
		this.props.dispatch(actions.fetchFewest());
	}
	handleSubmit(guess){
		if(this.props.state.guessing.feedback === 'You Won!'){
			this.props.dispatch(actions.addUserGuess(guess));
			this.props.dispatch(actions.postFewest(this.props.state.guessing.guesses.length));
		} else {
			this.props.dispatch(actions.addUserGuess(guess));
		}
		// this.props.dispatch(actions.addUserGuess(guess));
	}
	render(){
		return(
			<section className='game'>
				<Feedback feedback={this.props.state.guessing.feedback} />
				<Form onSubmit={this.handleSubmit} nj={this.props.state.guessing} />
				<Counter numOfGuesses={this.props.state.guessing.guesses.length} />
				<Fewest fewestGuess={this.props.state.guessing.fewestguess} />
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


