import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './app.css';



class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ' '			
		}

	}

	componentDidMount() {
		//request to server
		fetch('https://jsonplaceholder.typicode.com/users')
		//convert to json
		.then(response => response.json())
		//update
		.then(users => {this.setState({ robots: users })});
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value })
	}
	render () {
		const filteredRobots = this.state.robots.filter(robot => {
		return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>
		} else {
			return (

				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={ this.onSearchChange } />
					<CardList robots={ filteredRobots }/>
				</div>
			);
		}
	}
}


export default App;