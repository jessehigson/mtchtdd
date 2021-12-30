import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { NowPlaying } from './now-playing'
import Image from './image'

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

  const email = data.prismicFooter.data.email
  const headshot = data.prismicFooter.data.headshot

  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__container-inner">
            <div className="footer__column">
              <NowPlaying
                userName={process.env.LAST_FM_USERNAME}
                apiKey={process.env.LAST_FM_API_KEY}
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
                    >
                      {headshot && (
                        <Image
                          image={headshot}
                          alt={headshot.alt ? headshot.alt : ''}
                          className="footer__link-image"
                          sizes="8em"
                        />
                      )}
                      Contact me
                    </a>
                  )}
                </li>

                <li className="footer__links-list-item">
                  <a
                    href="https://www.jessehigson.com"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    title="Built by Jesse Higson"
                    className="footer__link site-credit"
                  >
                    <span className="site-credit__title">Site credit</span>
                    <span className="site-credit__content">
                      Built by Jesse Higson
                    </span>
                  </a>
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
