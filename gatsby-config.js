/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `ESSENTIALS`,
    description: `おいしい食材と食事を探求するサイト`,
    lang: `ja`,
    siteUrl: `https://naughty-tereshkova-463671.netlify.app/`
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jsons`,
        path: `${__dirname}/src/jsons`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ESSENTIALS エッセンシャルズ`,
        short_name: `ESSENTIALS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#477294`,
        display: `standalone`,
        icon: `src/images/icon.png`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        modalProps: {
          style: {
            overlay: {
              backgroundColor: `rgba(0, 0, 0, 0.75)`
            }
          }
        }
      }
    }
  ],
}
