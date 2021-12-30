import React, { useContext } from 'react'
import { VideoContext } from '../context/video-context-provider'

const VideoToggle = () => {
  const { isPlaying, toggleIsPlaying } = useContext(VideoContext)

  return (
    <button
      className="header__video-toggle video-toggle"
      onClick={toggleIsPlaying}
      aria-checked={isPlaying}
    >
      <span aria-hidden={!isPlaying}>Play</span>
      <span aria-hidden={isPlaying}>Pause</span>
      <span className="screenreader-text"> Video</span>
    </button>
  )
}

export default VideoToggle
