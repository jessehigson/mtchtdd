// HomepageBanner.js file

import * as React from 'react'

export const HomepageBanner = ({
  title,
  content,
}) => (
  <section className="homepage-banner">
    <div className="homepage-banner__container container container--flex">
      <div className="homepage-banner__column homepage-banner__column--left">
        <h2 className="homepage-banner__title">{title}</h2>
        <div className="homepage-banner__content">{content}</div>
      </div>
      <div className="homepage-banner__column homepage-banner__column--right">
        <h3 className="homepage-banner__title">{'Test'}</h3>
        <div className="homepage-banner__content">{'Test'}</div>
      </div>
    </div>
  </section>
)