import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <PostItem slug="/"
            category="misc"
            date="02 de abril de 2020"
            timeToRead="4"
            title="Meu primeiro post"
            description="descrição do meu primeiro post"
        />
              
  </Layout>
)

export default IndexPage
