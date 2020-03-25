module.exports = {
  siteMetadata: {
    title: `My resume online`,
    description: `I received bachelor degree in Computer Engineering (2007) and M. Sc. (2011) from 
    the Universidade Federal do Pará, Brazil. Currently, I am a Ph. D. candidate
    under advisement of Prof. Dr. Aldebaro Klautau at the Universidade Federal do Pará, Brazil. I have experience 
    in research and development projects related to deep learning and data analysis. 
    systems. My topics of interest are software engineering, data science, and artificial neural networks.`,
    author: `@myresume`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
