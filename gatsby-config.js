module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Scrawls of Carlos `,
    author: `Carlos Vitor`,
    description: `My First blog`,
    footer:`© 2018-2020 Carlos Developer. All rights reserved.`, 
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/ClsVitor`,
      },
      {
        name: `Github`,
        url: `https://github.com/carlosvitr`,
      },
       {
        name: `Gmail`,
        url: `mailto:contatos.carlosv@gmail.com`,
      },
    ],
  },
}
