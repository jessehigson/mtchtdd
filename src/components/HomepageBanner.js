// HomepageBanner.js file

import * as React from 'react'

export const HomepageBanner = ({
  title,
  content,
}) => (
  <section
    className="homepage-banner"
  >
    <div className="banner-content container">
      <h2 className="banner-title">{title}</h2>
      <p className="banner-description">{content}</p>
    </div>
  </section>
)