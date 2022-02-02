import { graphql, useStaticQuery } from 'gatsby'
import React, { useContext } from 'react'
import { WorkOverlayContext } from '../context/work-overlay-context-provider'
import Video from './video'

export const HomepageBanner = ({
  aboutTitle,
  aboutContent,
  workTitle,
  workContent,
}) => {
  const { workOverlayOpen, toggleWorkOverlay } = useContext(WorkOverlayContext)

  return (
    <>
      <section className="homepage-banner">
        <div className="homepage-banner__container container container--flex">
          <div className="homepage-banner__column homepage-banner__column--left">
            <div className="homepage-banner__content">
              <div className="homepage-banner__about">
                {aboutTitle && (
                  <h2 className="homepage-banner__about-title">{aboutTitle}</h2>
                )}

                {aboutContent && (
                  <div className="homepage-banner__about-content">
                    {aboutContent}
                  </div>
                )}
              </div>

              <div className="homepage-banner__work">
                <div className="homepage-banner__work-inner">
                  {workTitle && (
                    <h2 className="homepage-banner__work-title">{workTitle}</h2>
                  )}
                  {workContent && (
                    <div className="homepage-banner__work-content">
                      {workContent}
                    </div>
                  )}
                </div>

                <button
                  onClick={toggleWorkOverlay}
                  className="homepage-banner__overlay-trigger overlay-trigger"
                >
                  View<span className="screenreader-text"> Work Overlay</span>
                </button>
              </div>
            </div>
          </div>

          <div className="homepage-banner__column homepage-banner__column--right">
            <Video url="/video/showreel.mp4" />
          </div>
        </div>
      </section>
    </>
  )
}
