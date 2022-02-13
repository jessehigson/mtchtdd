import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Footer from './footer'
import Header from './header'
import Cursor from './cursor'

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        ariaHidden="false"
      />
      <main>{children}</main>
      <Cursor />
      <Footer />
    </>
  )
}
