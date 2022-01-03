import { graphql, useStaticQuery } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import React, { useContext } from 'react'
import { WorkOverlayContext } from '../context/work-overlay-context-provider'
import Image from './image'

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
          images {
            image {
              fluid {
                base64
                src
              }
              gatsbyImageData(
                layout: CONSTRAINED
                imgixParams: { q: 65 }
                placeholder: BLURRED
                breakpoints: [
                  750
                  1080
                  1366
                  1920
                  2048
                  2560
                  3840
                  4096
                  5120
                ]
              )
            }
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

  const { workOverlayOpen, closeWorkOverlay, imagesCounter, setImagesCounter } =
    useContext(WorkOverlayContext)

  const title = data.prismicWorkOverlay.data.title
  const content = data.prismicWorkOverlay.data.content
  const workTitle = data.prismicHomepage.data.work_title
  const workContent = data.prismicHomepage.data.work_content
  const linkLabel = data.prismicWorkOverlay.data.link_label
  const linkUrl = data.prismicWorkOverlay.data.link_url
  const images = data.prismicWorkOverlay.data.images

  const handleClick = () => {
    closeWorkOverlay()

    if (images.length - 1 == imagesCounter) {
      setImagesCounter(0)
    }
  }

  return (
    <>
      <section className="work-overlay" aria-hidden={!workOverlayOpen}>
        <div className="work-overlay__container container container--flex">
          <div className="work-overlay__column work-overlay__column--left">
            <div className="work-overlay__content">
              <div className="work-overlay__content-column">
                {title && (
                  <h4 className="work-overlay__content-column-title">
                    {RichText.asText(title.richText)}
                  </h4>
                )}
                {content && (
                  <div className="work-overlay__content-column-content">
                    {RichText.asText(content.richText)}
                  </div>
                )}
              </div>
              <div className="work-overlay__content-column">
                {workTitle && (
                  <h4 className="work-overlay__content-column-title">
                    {RichText.asText(workTitle.richText)}
                  </h4>
                )}
                {workContent && (
                  <div className="work-overlay__content-column-content">
                    {RichText.asText(workContent.richText)}
                  </div>
                )}

                <button
                  onClick={handleClick}
                  className="work-overlay__overlay-trigger overlay-trigger"
                >
                  Close<span className="screenreader-text"> Work Overlay</span>
                </button>
              </div>
            </div>
          </div>
          <div className="work-overlay__column work-overlay__column--right">
            <div className="work-overlay__images">
              {images.map((item, index) => {
                return (
                  <div
                    className="work-overlay__images-item"
                    key={index}
                    index={index}
                    aria-hidden={index !== imagesCounter}
                  >
                    <Image
                      image={item.image}
                      alt={item.image.alt ? item.image.alt : ''}
                      sizes="(min-width: 63.75em) 25vw, 100vw"
                    />
                  </div>
                )
              })}
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
