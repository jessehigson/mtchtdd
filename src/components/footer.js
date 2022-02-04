import { graphql, Link, useStaticQuery } from 'gatsby'
import React, { useContext } from 'react'
import { NowPlaying } from './now-playing'
import Image from './image'
import { CursorContext } from '../context/cursor-context-provider'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      prismicFooter {
        data {
          email
          headshot {
            fluid {
              base64
              src
            }
            gatsbyImageData(
              layout: CONSTRAINED
              imgixParams: { q: 65 }
              placeholder: BLURRED
              breakpoints: [750, 1080, 1366, 1920, 2048, 2560, 3840, 4096, 5120]
            )
          }
        }
      }
    }
  `)

  const { toggleCursorActive } = useContext(CursorContext)

  const email = data.prismicFooter.data.email
  const headshot = data.prismicFooter.data.headshot

  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__container-inner">
            <div className="footer__column">
              <NowPlaying
                userName={process.env.GATSBY_LAST_FM_USERNAME}
                apiKey={process.env.GATSBY_LAST_FM_API_KEY}
              />
            </div>
            <div className="footer__column">
              <ul className="footer__links-list">
                <li className="footer__links-list-item">
                  {email && (
                    <a
                      className="footer__link"
                      title={`Contact ${email}`}
                      href={`mailto:${email}`}
                      onMouseEnter={toggleCursorActive}
                      onMouseLeave={toggleCursorActive}
                    >
                      {headshot && (
                        <Image
                          image={headshot}
                          alt={headshot.alt ? headshot.alt : ''}
                          className="footer__link-image"
                          sizes="9.571428571428571em"
                        />
                      )}
                      Contact me
                    </a>
                  )}
                </li>

                <li className="footer__links-list-item">
                  <Link
                    to="https://www.jessehigson.com"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    title="Built by Jesse Higson"
                    className="footer__link site-credit"
                    onMouseEnter={toggleCursorActive}
                    onMouseLeave={toggleCursorActive}
                  >
                    <span className="site-credit__title">Site credit</span>
                    <span className="site-credit__content">
                      Built by Jesse Higson
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
