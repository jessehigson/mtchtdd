import * as React from "react"

export const Footer = () => (
  <footer class="footer">
    <div className="footer__container container container--flex">
      <div className="footer__now-playing">
        Now Playing
      </div>

      <span className="footer__attribution">
        Built by{" "}
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
  </footer>
)
