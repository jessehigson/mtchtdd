/**
 * The Link Resolver used for the Prismic repository. This function converts a
 * Prismic document to a URL within your app. It is used throughout your app to
 * resolve document links and support editor previews.
 *
 * {@link https://prismic.io/docs/technologies/link-resolver-gatsby}
 *
 * @param doc Prismic document to resolve to a URL within your app.
 *
 * @returns URL for the provided Prismic document.
 */
exports.linkResolver = doc => {
  switch (doc.type) {
    // dynamic project pages
    case 'project': {
      return `/project/${doc.uid}`
    }

    // dynamic legal pages
    case 'legalpage': {
      return `/legal/${doc.uid}`
    }

    // static pages
    case 'biography': {
      return `/biography`
    }
    case 'contact': {
      return `/contact`
    }
    case 'homepage': {
      return `/`
    }
    case 'newsfeed': {
      return `/news-feed`
    }

    default:
      return '/'
  }
}
