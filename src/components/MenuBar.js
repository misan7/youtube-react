import React from 'react'
import SearchForm from './SearchForm.js'

const MenuBar = (props) => (

	<div>
		<SearchForm
			placeholder = "Search Videos"
			onSend = {(value) => props.onSearch(value)} />
	</div>
)

export default MenuBar