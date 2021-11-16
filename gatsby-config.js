// gatsby-config.js file

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
    DEV_SSR: true,
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `Mitchell Todd`,
    description: `Mitchell Todd, Digital Designer`,
    author: `@mtchtdd`,
    siteUrl: `https://www.mtchtdd.com`,
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_API_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_API_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require("./src/utils/link-resolver").linkResolver,
        schemas: {
          homepage: require("./custom_types/homepage.json"),
          navigation: require("./custom_types/navigation.json"),
          page: require("./custom_types/page.json"),
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`webp`],
          quality: 90,
          breakpoints: new Array(7).fill(0).map((_, i) => (i + 1) * 400),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
  ],
}
