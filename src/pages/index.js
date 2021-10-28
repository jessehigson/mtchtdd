// index.js file

import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'

const HomeTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicHomepage.data

  return (
    <Layout isHomepage>
      <Seo title="Home" />
      <HomepageBanner
        title={RichText.asText(doc.about_title.raw)}
        content={RichText.asText(doc.about_content.raw)}
      />
    </Layout>
  )
}

export const query = graphql`
  query Homepage {
    prismicHomepage {
      data {
        about_title {
          raw
        }
        about_content {
          raw
        }
      }
    }
  }
`

export default HomeTemplate