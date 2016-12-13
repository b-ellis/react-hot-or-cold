import React from 'react';

import Game from './game';
import About from './about'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			info: false
		}
		this.showInfo = this.showInfo.bind(this);
		this.closeInfo = this.closeInfo.bind(this);
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
								<li onClick={this.showInfo.bind(this)}><a className="what" href="#">What ?</a></li>
								<li><a className="new" href="#">+ New Game</a></li>
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

module.exports = App;