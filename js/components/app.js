import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions/index';
import store from '../store';
import Game from './game';
import About from './about';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			info: false
		}
		this.showInfo = this.showInfo.bind(this);
		this.closeInfo = this.closeInfo.bind(this);
		this.reset = this.reset.bind(this);
	}

	reset(){
		this.props.dispatch(actions.newGame());
	}

	showInfo(){
		this.setState({
			info: true
		});
	}

	closeInfo(){
		this.setState({
			info: false
		});
	}

	render(){
		if(this.state.info) {
			return (
				<About onClick={this.closeInfo.bind(this)} />
			)
		} else {
			return (
				<div>
					<header> 

						<nav> 
							<ul className="clearfix">
								<li onClick={this.showInfo}><a className="what" href="#">What ?</a></li>
								<li onClick={this.reset}><a className="new" href="#">+ New Game</a></li>
							</ul>
						</nav>

						<h1>HOT or COLD</h1>

					</header>

					<Game />
				</div>
			)
		}
	}
};

const Container = connect()(App)

module.exports = Container;