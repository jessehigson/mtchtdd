import * as React from "react"

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container container container--flex">
        <h1 className="header__title">
          <span>Mitchell Todd</span>
          <span>Digital Designer</span>
        </h1>

        <div className="header__video-toggle">Video Toggle</div>
      </div>
    </header>
  )
}
