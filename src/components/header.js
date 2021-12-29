import React, { useContext } from 'react'
import { VideoContext } from '../context/video-context-provider'

const Header = () => {
  const { isPlaying, toggleIsPlaying } = useContext(VideoContext)

  return (
    <>
      <header className="header">
        <div className="header__container container">
          <div className="header__container-inner">
            <h1 className="header__title">
              <span>Mitchell</span>
              <span>Todd</span>
            </h1>

            <button
              className="header__video-toggle"
              onClick={toggleIsPlaying}
              aria-checked={isPlaying}
            >
              <span>{isPlaying ? 'Pause' : 'Play'} video</span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
