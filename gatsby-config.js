const path = require("path");

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://mtchtdd.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const prismicConfig = require("./prismic-configuration");

module.exports = {
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
        repositoryName: prismicConfig.prismicRepo,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require("./src/utils/link-resolver").linkResolver,
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: prismicConfig.prismicRepo,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "mtchtdd-com",
        short_name: "mtchtdd",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        display: "minimal-ui",
        icon: path.resolve(__dirname, "src", "images", "favicon.png"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.resolve(__dirname, "src", "images"),
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    "gatsby-plugin-netlify",
  ],
};
