module.exports = {
  siteMetadata: {
    siteUrl: 'https://rezanotalive.gatsbyjs.io',
    title: 'Rezanotalive',
    description: 'My fucking Portfolio',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      option: {
        failOnError: true,
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
    },
  ],
}
