import React, { useContext } from 'react'
import { WorkOverlayContext } from '../context/work-overlay-context-provider'
import VideoToggle from './video-toggle'

const Header = () => {
  const { workOverlayOpen } = useContext(WorkOverlayContext)

  return (
    <>
      <header
        className={`header ${workOverlayOpen ? ' header--modifier-white' : ''}`}
      >
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
