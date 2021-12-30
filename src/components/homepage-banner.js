// HomepageBanner.js file

import * as React from 'react'
import Video from './video'

export const HomepageBanner = ({
  aboutTitle,
  aboutContent,
  workTitle,
  workContent,
}) => (
  <section className="homepage-banner">
    <div className="homepage-banner__container container container--flex">
      <div className="homepage-banner__column homepage-banner__column--left">
        <div className="homepage-banner__content">
          <div className="homepage-banner__about">
            <h2 className="homepage-banner__about-title">{aboutTitle}</h2>
            <div className="homepage-banner__about-content">{aboutContent}</div>
          </div>

          <div className="homepage-banner__work">
            <h2 className="homepage-banner__work-title">{workTitle}</h2>
            <div className="homepage-banner__work-content">{workContent}</div>
          </div>
        </div>
      </div>

      <div className="homepage-banner__column homepage-banner__column--right">
        <Video url="/video/cash.mp4" />
      </div>
    </div>
  </section>
)
