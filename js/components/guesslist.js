import React from 'react';
import { connect } from 'react-redux';

import store from '../store';

class GuessList extends React.Component{
	render(){
		let guesslist = [];
		for(let i = 0; i < this.props.guesses.length; i++){
			guesslist.push(<Guess key={i} text={this.props.guesses[i].userGuess}/>);
		}
		return (
			<ul id="guessList" className="guessBox clearfix">
				{guesslist}
			</ul>
		)		
	}
}

class Guess extends React.Component {
	render() {
		return(
			<li>{this.props.text}</li>
		) 
	}
}


const mapStateToProps = (state, props) => {
	return {
		guesses: state.guessing.guesses
	}
}

const Container = connect(mapStateToProps)(GuessList)

module.exports = Container;