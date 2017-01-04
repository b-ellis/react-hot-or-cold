import React from 'react';

// const Fewest = (props) => {
// 	return <h4>Lowest Score: {props.fewestGuess} guesses</h4>
// }

class Fewest extends React.Component {
	render(){
		return(
			<div>
				<h4>Lowest Score: {this.props.fewestGuess} guesses</h4>
			</div>
		)
	}
}

module.exports = Fewest;