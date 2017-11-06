import React from 'react'
import PropTypes from 'prop-types'

const VideoItem = (props) => {

	return (
		<div>
			<h3>{props.video.title}</h3>
			<img src={props.video.image.url} alt={props.video.title} />
		</div>
	)
}

VideoItem.propTypes = {
  video: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string
    }),
    title: PropTypes.string
  })
}

export default VideoItem