import { RichText } from "prismic-reactjs"
import React from "react"
import Heading from "./content/heading"

export const About = () => {
  return (
    <section className="about">
      <div className="about__container container">
        {heading && (
          <Heading
            className="about__title"
            text={heading.text}
            level="1"
          />
        )}
        {content && (
          <RichText render={content.raw} />
        )}
      </div>
    </section>
  )
}
