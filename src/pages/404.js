import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { css } from '@emotion/react'
import Seo from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="Error Page" description="This page was not found" />
      <section
        className="section"
        css={css`
          text-align: center;
          max-width: 600px;

          p {
            margin: 1rem 0;
          }
        `}
      >
        <h1>You Must Be Lost</h1>
        <p>This page doesn't exist</p>
        <Link to="/" className="btn btn-small btn-primary">
          back home
        </Link>
      </section>
    </Layout>
  )
}

export default NotFoundPage
