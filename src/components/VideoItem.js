import React from 'react'

const VideoItem = (props) => {

	const src = "https://www.youtube.com/embed/" + props.videoId

	return (
		<div>
			<h3>{props.title}</h3>
			<iframe title={props.title} src={src}
			width="" height="" frameBorder="0"
			allowFullScreen></iframe>
		</div>
	)
}

export default VideoItem