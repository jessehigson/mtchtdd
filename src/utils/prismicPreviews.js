/**
 * This file contains configuration for `gatsby-plugin-prismic-previews` to
 * support preview sessions from Prismic with drafts and unpublished documents.
 *
 * @see https://prismic.io/docs/technologies/previews-gatsby
 */

import { componentResolverFromMap } from 'gatsby-plugin-prismic-previews'

import { prismicRepo } from '../../prismic-configuration'
import { linkResolver } from './link-resolver'

import About from '../pages/about'
import Index from '../pages/index'

/**
 * Prismic preview configuration for each repository in your app. This set of
 * configuration objects will be used with the `PrismicPreviewProvider`
 * higher order component.
 *
 * If your app needs to support multiple Prismic repositories, add each of
 * their own configuration objects here as additional elements.
 *
 */
export const repositoryConfigs = [
  {
    repositoryName: prismicRepo,
    linkResolver,
    componentResolver: componentResolverFromMap({
      about: About,
      index: Index,
    }),
  },
]
