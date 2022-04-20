import { Link } from 'gatsby'
import React, { useContext } from 'react'
import { WorkOverlayContext } from '../context/work-overlay-context-provider'
import { CursorContext } from '../context/cursor-context-provider'
import Logo from './icons/logo'
import VideoToggle from './video-toggle'

const Header = ({ ariaHidden }) => {
  const { workOverlayOpen } = useContext(WorkOverlayContext)
  const { activateCursor, deactivateCursor } = useContext(CursorContext)

  return (
    <>
      <header
        className={`header${workOverlayOpen ? ' header--modifier-white' : ''}`}
        aria-hidden={ariaHidden}
      >
        <div className="header__container container">
          <div className="header__container-inner">
            <Link
              to="/#"
              className="header__logo"
              onMouseEnter={activateCursor}
              onMouseLeave={deactivateCursor}
            >
              <Logo />
              <span className="screenreader-text">Mitchell Todd</span>
            </Link>

            <VideoToggle />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
