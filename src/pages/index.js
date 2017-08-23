import React from 'react'
import Link from 'gatsby-link'
import css from './index.module.css'

const IndexPage = () =>
  <div className={css.container}>
    <h1>Steps to reproduce:</h1>
    <ol>
      <li>Open the inspector</li>
      <li>Inspect the container of this text</li>
      <li>
        You should see a PostCSS processed CSS <i>and</i> unprocessed CSS
      </li>
    </ol>
  </div>

export default IndexPage
