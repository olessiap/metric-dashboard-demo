import React from 'react'
import {Helmet} from "react-helmet";

const SEO = ({title}) => {
  const titleText = title ? `Admin - ${title}` : 'Admin'
  return(
    <Helmet>
      <meta charSet="utf-8" />
      <title>{titleText}</title>
      <meta name="Admin" content="Admin Dashboard" />
    </Helmet>
  )
}

export default SEO