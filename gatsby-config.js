module.exports = {
  pathPrefix: "/thegreatestofgatsby",
  siteMetadata: {
    title: `The Greatest Of Gatsby`,
    author: `@mivladie`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${ __dirname }/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'The Greatest Of Gatsby',
        start_url: '/',
        icon: 'src/assets/icons/favicon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Poppins',
            variants: ['300', '400', '500']
          },
          {
            family: 'Montserrat'
          }
        ]
      }
    }
  ]
}
