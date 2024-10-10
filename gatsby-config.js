/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "icon": "src/images/icon.png",
      }
    }
  ],
  pathPrefix: "/learn-gatsby",
}
