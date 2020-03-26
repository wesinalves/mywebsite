import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
    I received bachelor degree in Computer Engineering (2007) and M. Sc. (2011) from 
    the Universidade Federal do Pará, Brazil. Currently, I am a Ph. D. candidate
    under advisement of Prof. Dr. Aldebaro Klautau at the Universidade Federal do Pará, Brazil. I have experience 
    in research and development projects related to deep learning and data analysis. 
    systems. My topics of interest are software engineering, data science, and artificial neural networks.
    </p>
    <ul>
        <li>
            <Link to="/" activeStyle={{ color: "blue"}}>Home</Link>
        </li>
        <li>
            <Link to="/about" activeStyle={{ color: "blue"}}>About</Link>
        </li>
    </ul>
  </Layout>
)

export default AboutPage 