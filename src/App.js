import React from 'react'
import VideoItem from './components/VideoItem.js'

const App = () => {

  const videos = [
    { videoId: "6KxtgS2lU94", title: "Björk - Army Of Me" },
    { videoId: "1uYWYWPc9HU", title: "Radiohead - Karma Police" },
    { videoId: "3mbBbFH9fAg", title: "Soundgarden - Black Hole Sun" }
  ]

  const VideoItems = videos.map((v) => <VideoItem key={v.videoId} videoId={v.videoId} title={v.title}/>)

  return <div>{VideoItems}</div>

}

export default App