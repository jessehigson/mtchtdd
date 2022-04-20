import React, { useContext } from 'react'
import { VideoContext } from '../context/video-context-provider'
import { CursorContext } from '../context/cursor-context-provider'

const VideoToggle = () => {
  const { isPlaying, toggleIsPlaying } = useContext(VideoContext)
  const { activateCursor, deactivateCursor } = useContext(CursorContext)

  return (
    <button
      className="header__video-toggle video-toggle"
      onClick={toggleIsPlaying}
      onMouseEnter={activateCursor}
      onMouseLeave={deactivateCursor}
      aria-checked={isPlaying}
    >
      <span aria-hidden={!isPlaying}>Play</span>
      <span aria-hidden={isPlaying}>Pause</span>
      <span className="screenreader-text"> Video</span>
    </button>
  )
}

export default VideoToggle
