import React from 'react'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { graphql } from 'gatsby'
import { Seo } from '../components/seo'
import { HomepageBanner } from '../components/homepage-banner'
import { RichText } from 'prismic-reactjs'

const Index = ({ data }) => {
  if (!data) return null

  const pageData = data.prismicHomepage.data

  return (
    <>
      <Seo data={pageData} />
      <HomepageBanner
        aboutTitle={RichText.asText(pageData.about_title.raw)}
        aboutContent={RichText.asText(pageData.about_content.raw)}
        workTitle={RichText.asText(pageData.work_title.raw)}
        workContent={RichText.asText(pageData.work_content.raw)}
      />
    </>
  )
}

export const query = graphql`
  query HomepageQuery {
    prismicHomepage {
      data {
        about_title {
          raw
        }
        about_content {
          raw
        }
        work_title {
          raw
        }
        work_content {
          raw
        }
      }
    }
  }
`

export default withPrismicPreview(Index)
