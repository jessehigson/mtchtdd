import * as React from 'react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { repositoryConfigs } from './src/utils/prismicPreviews'
import './src/stylesheets/main.sass'
import { Layout } from './src/components/layout'
import { LocationProvider } from '@reach/router'
import VideoContextProvider from './src/context/video-context-provider'
import WorkOverlayContextProvider from './src/context/work-overlay-context-provider'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
    <LocationProvider>
      <WorkOverlayContextProvider>
        <VideoContextProvider>
          <Layout>{element}</Layout>
        </VideoContextProvider>
      </WorkOverlayContextProvider>
    </LocationProvider>
  </PrismicPreviewProvider>
)
