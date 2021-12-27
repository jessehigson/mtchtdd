import PropTypes from 'prop-types'
import * as React from 'react'

const Footer = ({ siteTitle }) => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__container-inner">
          <div className="footer__now-playing">Now Playing</div>

          <span className="footer__attribution">
            Built by{' '}
            <a
              href="https://www.jessehigson.com"
              rel="nofollow noopener noreferrer"
              target="_blank"
              title="Built by Jesse Higson"
            >
              Jesse Higson
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
