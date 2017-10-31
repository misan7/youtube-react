import React from 'react'

const VideoItem = (props) => {

	return (
		<div>
			<h3>{props.video.title}</h3>
			<img src={props.video.image.url} alt={props.video.title} />
		</div>
	)
}

export default VideoItem