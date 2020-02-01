module.exports = {
  title: "Presentosaurus",
  tagline: "Under development",
  url: "https://presentosaurus.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "presentosaurus", // Usually your GitHub org/user name.
  projectName: "presentosaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Presentosaurus",
      links: [
        { to: "docs/getting-started", label: "Docs", position: "left" },
        {
          href: "https://github.com/presentosaurus/presentosaurus",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "docs/getting-started"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Miguel Santos Correa`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
