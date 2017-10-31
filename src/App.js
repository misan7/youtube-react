import React, { Component } from 'react'
import VideoList from './components/VideoList.js'
import axios from 'axios'
import apiKey from './youtube-api-key.json'

class App extends Component {

	constructor(props) {
		super(props)

		this.state = { 
			searchTerm: "",
			videos: []
		}
	}

	/* Video searching using state.searchTerm */
	searchVideos() {
		
		console.log('Searching Videos:' + this.state.searchTerm)

		const searchApi = "https://www.googleapis.com/youtube/v3/search"
		const queryTerm = encodeURIComponent(this.state.searchTerm)
		const url = searchApi + "?q=" + queryTerm + "&key=" + apiKey + "&maxResults=10&part=snippet"

		axios.get(url)
			.then((response) => {

				const videos = response.data.items
					.filter(v => v.id.kind === "youtube#video")
					.map(v => ({
						id: v.id.videoId, 
						title: v.snippet.title,
						image: v.snippet.thumbnails.medium
					}))

				this.setState({ videos: videos })
			})
			.catch((error) => {
				console.error(error)
			})
	}

	/* Updating state.searchTerm */
	updateSearchTerm(value) {

		this.setState({ searchTerm: value })
	}

	render() {

		return (
			<div>
				<input 
					value= {this.state.searchTerm} 
					placeholder="Search Video" 
					onChange={(event) => this.updateSearchTerm(event.target.value)}
				/>
				<button 
					onClick={(event) => this.searchVideos()}>
					Search!
				</button>
				<VideoList videos={this.state.videos}></VideoList>
			</div>
		)
	}
}

export default App