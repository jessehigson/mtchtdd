import * as React from 'react'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'

const NotFoundPage = () => (
  <>
    <Seo title="Not found" />

    <section className="error">
      <div className="error__container container container--flex">
        <div className="error__column">
          <h1 className="error__title">Oh no!</h1>
          <h3 className="error__subtitle">
            We can't seem to find the page you're looking for.
          </h3>
        </div>
      </div>
    </section>
  </>
)

export default NotFoundPage
