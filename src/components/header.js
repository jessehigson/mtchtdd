import React from 'react'
import VideoToggle from './video-toggle'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container container">
          <div className="header__container-inner">
            <h1 className="header__title">
              <span>Mitchell</span>
              <span>Todd</span>
            </h1>

            <VideoToggle />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
