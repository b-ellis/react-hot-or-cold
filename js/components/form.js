import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


import store from '../store';
import actions from '../actions/index';

class Form extends React.Component {
	constructor(props){
		super();
		this.addGuess = this.addGuess.bind(this);
		const { handleSubmit } = props;
	}
	addGuess(event){
		event.preventDefault();
		const userGuess = this.refs.guessInput.value;
		this.props.onSubmit(userGuess);
		// this.refs.guessInput.value = '';
	}
	render(){
		console.log(this.props)
		return(
			<div>
				<form onSubmit={this.addGuess}>
					<input name="userGuess" component="input" type="text" id="userGuess" className="text" maxLength="3" autoComplete="off" 
						   placeholder="Enter your Guess"
						   value={this.props.guessInput}
						   ref='guessInput' required/>
	      			<input type="submit" component='input' id="guessButton" className="button" name="submit" value="Guess" onClick={this.addGuess} 
	      				   placeholder='Guess'/>
				</form>
			</div>
		)
	}
};

// const mapStateToProps = (state, props) => {
// 	return{
// 		feedback: state.feedback
// 	}
// } 

// const Container = connect()(Form)

const GuessingForm = reduxForm({
	form: 'guessingForm'
})(Form);

module.exports = GuessingForm;