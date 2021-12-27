import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      prismicFooter {
        data {
          email
        }
      }
    }
  `)

  const email = data.prismicFooter.data.email

  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__container-inner">
            <div className="footer__column">
              <div className="footer__now-playing">Now Playing</div>
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
                    className="footer__link"
                  >
                    Site credit
                    <span className="screenreader-text">
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
