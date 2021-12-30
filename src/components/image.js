import React, { Component } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import atob from 'atob'

export default class Image extends Component {
  render() {
    /**
     * @type {Image} image
     */
    const { image, ...props } = this.props

    if (image.gatsbyImageData) {
      return (
        <GatsbyImage image={image.gatsbyImageData} alt={image.alt} {...props} />
      )
    }

    // Everything rendered after this point is a DOM element,
    // so remove any props which would be invalid in that context
    delete props.fadeIn

    if (image.fluid) {
      const stub = 'data:image/svg+xml;base64,'
      if (image.fluid.base64.includes(stub)) {
        return (
          <div
            dangerouslySetInnerHTML={{
              __html: atob(image.fluid.base64.replace(stub, '')),
            }}
            {...props}
          />
        )
      }

      return <img src={image.fluid.src} alt={image.alt} {...props} />
    }

    return <div className="image-placeholder" {...props} />
  }
}

Image.defaultProps = {
  loading: 'lazy',
}
