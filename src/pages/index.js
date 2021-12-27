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
        aboutTitle={RichText.asText(pageData.about_title.richText)}
        aboutContent={RichText.asText(pageData.about_content.richText)}
        workTitle={RichText.asText(pageData.work_title.richText)}
        workContent={RichText.asText(pageData.work_content.richText)}
      />
    </>
  )
}

export const query = graphql`
  query HomepageQuery {
    prismicHomepage {
      data {
        about_title {
          richText
        }
        about_content {
          richText
        }
        work_title {
          richText
        }
        work_content {
          richText
        }
      }
    }
  }
`

export default withPrismicPreview(Index)
