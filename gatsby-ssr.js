import * as React from 'react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { repositoryConfigs } from './src/utils/prismicPreviews'
import './src/stylesheets/main.sass'
import { Layout } from './src/components/layout'
import { LocationProvider } from '@reach/router'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
    <LocationProvider>
      <Layout>{element}</Layout>
    </LocationProvider>
  </PrismicPreviewProvider>
)
