module.exports = {
  siteMetadata: {
    title: `The Greatest Of Gatsby`,
    author: `@mivladie`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
    }
  ]
}
