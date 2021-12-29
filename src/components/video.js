import React, { useContext } from 'react'
import ReactPlayer from 'react-player'
import { VideoContext } from '../context/video-context-provider'

const Video = ({ url }) => {
  const { isPlaying } = useContext(VideoContext)

  return (
    <div className="video">
      <figure className="video__wrapper">
        <ReactPlayer
          url={url}
          playing={isPlaying}
          loop={true}
          volume={0}
          muted={true}
          width="100%"
          height="100%"
          autoPlay={true}
          className="video__player"
          playsinline={true}
        />
      </figure>
    </div>
  )
}

export default Video
