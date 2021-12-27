import React from 'react'
import { Link } from 'gatsby'
import { linkResolver } from './link-resolver'

export const CustomLink = (type, element, content, children, index) => {
  if (element.data.link_type === 'Document') {
    return (
      <Link to={linkResolver(element.data)} key={element.data.id}>
        {content}
      </Link>
    )
  }

  if (element.data.link_type === 'Web') {
    return (
      <a key={element.data.id} href={element.data.url} target={element.data.target ? element.data.target : ''}>
        {content}
      </a>
    )
  }

  if (element.data.link_type === 'Media') {
    return (
      <a key={element.data.id} href={element.data.url} target="_blank">
        {content}
      </a>
    )
  }

  return null
}
