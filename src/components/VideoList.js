import React from 'react'
import VideoItem from './VideoItem.js'

const VideoList = (props) => {

	const VideoItems = props.videos
		.map(v => <VideoItem key={v.id} videoId={v.id} title={v.title}/>)

	return <div>{VideoItems}</div>
}

export default VideoList