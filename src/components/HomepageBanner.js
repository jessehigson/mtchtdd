// HomepageBanner.js file

import * as React from 'react'

export const HomepageBanner = ({
  aboutTitle,
  aboutContent,
  workTitle,
  workContent,
}) => (
  <section className="homepage-banner">
    <div className="homepage-banner__container container container--flex">
      <div className="homepage-banner__column homepage-banner__column--left">
        <h2 className="homepage-banner__title">{aboutTitle}</h2>
        <div className="homepage-banner__content">{aboutContent}</div>
      </div>
      <div className="homepage-banner__column homepage-banner__column--right">
        <h3 className="homepage-banner__title">{workTitle}</h3>
        <div className="homepage-banner__content">{workContent}</div>
      </div>
    </div>
  </section>
)