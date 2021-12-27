import * as React from 'react'

const Header = ({ siteTitle }) => {
  return (
    <>
      <header className="header">
        <div className="header__container container">
          <div className="header__container-inner">
            <h1 className="header__title">
              <span>Mitchell</span>
              <span>Todd</span>
            </h1>

            <div className="header__video-toggle">Video Toggle</div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
