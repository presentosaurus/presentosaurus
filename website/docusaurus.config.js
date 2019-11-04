module.exports = {
  title: "Pyro",
  tagline: "The tagline of my site",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "pyroslides", // Usually your GitHub org/user name.
  projectName: "pyro", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Pyro",
      logo: {
        alt: "Logo",
        src: "img/logo.svg"
      },
      links: [
        { to: "docs/configuration", label: "Docs", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/miguel-sc/pyro",
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
              to: "docs/configuration"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            }
          ]
        }
      ],
      logo: {
        alt: "Facebook Open Source Logo",
        src: "https://docusaurus.io/img/oss_logo.png"
      },
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
