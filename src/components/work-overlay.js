import { graphql, useStaticQuery } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import React, { useContext } from 'react'
import { WorkOverlayContext } from '../context/work-overlay-context-provider'

const WorkOverlay = () => {
  const data = useStaticQuery(graphql`
    query WorkOverlayQuery {
      prismicWorkOverlay {
        data {
          title {
            richText
          }
          content {
            richText
          }
          link_label
          link_url {
            type
            url
            uid
            target
          }
        }
      }
      prismicHomepage {
        data {
          work_title {
            richText
          }
          work_content {
            richText
          }
        }
      }
    }
  `)

  const { workOverlayOpen, toggleWorkOverlay } = useContext(WorkOverlayContext)

  const title = data.prismicWorkOverlay.data.title
  const content = data.prismicWorkOverlay.data.content
  const workTitle = data.prismicHomepage.data.work_title
  const workContent = data.prismicHomepage.data.work_content
  const linkLabel = data.prismicWorkOverlay.data.link_label
  const linkUrl = data.prismicWorkOverlay.data.link_url

  return (
    <>
      <section className="work-overlay" aria-hidden={!workOverlayOpen}>
        <div className="work-overlay__container container container--flex">
          <div className="work-overlay__inner">
            <div className="work-overlay__column">
              {title && (
                <h4 className="work-overlay__column-title">
                  {RichText.asText(title.richText)}
                </h4>
              )}
              {content && (
                <div className="work-overlay__column-content">
                  {RichText.asText(content.richText)}
                </div>
              )}
            </div>
            <div className="work-overlay__column">
              {workTitle && (
                <h4 className="work-overlay__column-title">
                  {RichText.asText(workTitle.richText)}
                </h4>
              )}
              {workContent && (
                <div className="work-overlay__column-content">
                  {RichText.asText(workContent.richText)}
                </div>
              )}

              <button
                onClick={toggleWorkOverlay}
                className="work-overlay__overlay-trigger overlay-trigger"
              >
                Close<span className="screenreader-text"> Work Overlay</span>
              </button>
            </div>
          </div>
        </div>

        {linkUrl && (
          <div className="work-overlay__footer">
            <div className="work-overlay__footer-container container">
              <a
                href={linkUrl.url}
                target={linkUrl.target}
                className="work-overlay__footer-link"
              >
                {linkLabel}
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default WorkOverlay
