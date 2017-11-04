import React, { Component } from 'react'

/** Form with an <input> and a <button>
	that calls onSend(inputValue) when clicked **/
class SearchForm extends Component {

	constructor(props){
		super(props)

		this.state = {
			inputValue: ""
		}
	}

	sendValue() {
		this.props.onSend(this.state.inputValue)
	}

	/* Updating state.inputValue */
	updateInputValue(value) {
		this.setState({ inputValue: value })
	}

	render() {

		return (
			<div>
			<p>
				<input 
					value = {this.state.inputValue} 
					placeholder = {this.props.placeholder}
					onChange = {(event) => this.updateInputValue(event.target.value)}
				/>
				<button 
					onClick = {(event) => this.sendValue()}>
					Search!
				</button>
				</p>
			</div>
		)
	}
}

export default SearchForm