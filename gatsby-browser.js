import * as React from 'react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { repositoryConfigs } from './src/utils/prismicPreviews'
import './src/stylesheets/main.sass'
import { Layout } from './src/components/layout'
import { LocationProvider } from '@reach/router'
import VideoContextProvider from './src/context/video-context-provider'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
    <LocationProvider>
      <VideoContextProvider>
        <Layout prevLocation>{element}</Layout>
      </VideoContextProvider>
    </LocationProvider>
  </PrismicPreviewProvider>
)

export const onRouteUpdate = ({ location: { pathname }, prevLocation }) => {
  if ('navOpenProvider' in window) {
    Object.keys(navOpen).forEach(key =>
      closeNav.call(window.navOpenProvider, key),
    )
  }

  if (pathname === '/') {
    pathname = 'home'
  }

  window.scrollTo(0, -10)

  document.body.setAttribute(
    'class',
    `page ${[
      ...pathname
        .split('/')
        .filter(x => !!x)
        .map(slug => `page--${slug}`),
    ].join(' ')}`,
  )

  window.locations = window.locations || [document.referrer]
  if (window.locations[locations.length - 1] !== window.location.href) {
    window.locations.push(window.location.href)
  }
  window.previousPath = window.locations[locations.length - 2]
}
