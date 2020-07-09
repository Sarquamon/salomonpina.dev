module.exports = {
  siteMetadata: {
    title: "Salomón Piña",
    author: "Salomón Piña",
    description:
      "Computer science engineer and full-stack software developer. This is the place where I tell my expirences learning new stuff.",
    pathPrefix: "/",
    siteUrl: "https://salomonpina.dev",
    logo: "https://salomonpina.dev/appLogo.png",
  },
  plugins: [
    // Metadata.

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Salomón Piña`,
        short_name: `SP`,
        description:
          "Computer science engineer and full-stack software developer. This is the place where I tell my expirences learning new stuff.",
        start_url: `/`,
        background_color: `white`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/appLogo.png`, // img has to be at least 512x512px
      },
    },

    // Images, content and static stuff.

    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },

    // Markdown engine.

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-prismjs", "gatsby-remark-images"],
      },
    },
  ],
};
