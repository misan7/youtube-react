import React, { Component } from 'react'

class SearchForm extends Component {

	constructor(props){
		super(props)

		this.state = {
			searchTerm: ""
		}
	}

	searchVideos() {
		this.props.onSend(this.state.searchTerm)
	}

	/* Updating state.searchTerm */
	updateSearchTerm(value) {
		this.setState({ searchTerm: value })
	}

	render() {

		return (
			<div>
			<p>
				<input 
					value= {this.state.searchTerm} 
					placeholder="Search Video" 
					onChange={(event) => this.updateSearchTerm(event.target.value)}
				/>
				<button 
					onClick={(event) => this.searchVideos()}>
					Search!
				</button>
				</p>
			</div>
		)
	}
}

export default SearchForm