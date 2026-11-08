// no github pages o site não fica na raiz, o prefixo vem da action de deploy
const siteUrl = process.env.GATSBY_SITE_URL || "http://localhost:8000"

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: process.env.PATH_PREFIX || "",
  trailingSlash: "always",
  siteMetadata: {
    title: `Caderno de receitas`,
    description: `Receitas simples que eu anotei pra fazer de novo.`,
    siteUrl: siteUrl,
    image: `/capa.png`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `receitas`,
        path: `${__dirname}/content/receitas`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
