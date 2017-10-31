import React from 'react'
import VideoItem from './VideoItem.js'

const VideoList = (props) => {

	const VideoItems = props.videos
		.map(video => <VideoItem key={video.id} video={video}/>)

	return <div>{VideoItems}</div>
}

export default VideoList