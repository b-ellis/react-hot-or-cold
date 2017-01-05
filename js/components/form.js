import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import store from '../store';
import actions from '../actions/index';

let Form = (props) => {
	let { handleSubmit } = props;

	return(
		<div>
			<form onSubmit={handleSubmit}>
				<Field name="userGuess" component={renderField} type="text" validate={[number, range, wholenumber]} nj={props}/>
      			<input type="submit" id="guessButton" className="button" name="submit" value="Guess" onClick={handleSubmit} />
			</form>
		</div>
	)
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
      <input {...input} name="userGuess" placeholder="Enter your Guess" type="text" id="userGuess" className="text" maxLength="3" autoComplete="off" required/>
      {touched && ((error && <span>{error}</span>))}
  </div>
)

const number = value => value && isNaN(Number(value)) ? "Please input a Number" : undefined;
const wholenumber = value => value && (Number(value % 1 !== 0)) ? "Please input a Whole Number" : undefined;
const range = value => value && (Number(value < 0 || value > 100)) ? "Please input a Number between 1 and 100" : undefined;


Form = reduxForm({
	form: 'guessingForm'
})(Form);

module.exports = Form;