import React from 'react'
import ReactPlayer from 'react-player'
import './VideoPlayer.css'

function VideoPlayer() {
  return (
    <div className="VideoPlayer">
      <ReactPlayer controls url='https://www.youtube.com/watch?v=9boMnm5X9ak' />
    </div>
  )
}

export default VideoPlayer
