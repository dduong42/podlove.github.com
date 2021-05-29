/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Podlove Documentation",
  tagline: "Open Source Technology for Independent Podcasting",
  url: "https://docs.podlove.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "podlove", // Usually your GitHub org/user name.
  projectName: "podlove.github.com", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Documentation",
      logo: {
        alt: "Podlove Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "podlove-publisher/index.html",
          activeBasePath: "podlove-publisher",
          label: "Podlove Publisher",
          position: "left",
        },
        {
          to: "podlove-web-player/index.html",
          activeBasePath: "podlove-web-player",
          label: "Podlove Web Player",
          position: "left",
        },
        {
          href: "https://subscribe-button.podlove.org",
          label: "Podlove Subscribe Button",
          position: "left",
        },
        {
          href: "https://opencollective.com/podlove",
          label: "Donation",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Podlove Community",
              href: "https://community.podlove.org/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/podlove_org",
            },
            {
              label: "Discord",
              href: "https://discord.gg/tHnGgvg",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/podlove",
            },
            {
              label: "Podlovers Podcast",
              href: "https://podlovers.org",
            },
          ],
        },
      ],
    },
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      additionalLanguages: ["twig"],
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "web-player",
        path: "web-player",
        routeBasePath: "podlove-web-player",
        sidebarPath: require.resolve("./web-player/sidebar.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "publisher",
        path: "publisher",
        routeBasePath: "podlove-publisher",
        sidebarPath: require.resolve("./publisher/sidebar.js"),
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        toExtensions: ["html"],
        redirects: [
          {
            from: ['/publisher/guides/join-the-beta'],
            to: '/publisher/join-the-beta',
          },
          {
            from: ['/publisher/guides/dsgvo-gdpr'],
            to: '/publisher/reference/dsgvo-gdpr',
          },
          {
            from: ['/publisher/guides/download-analytics'],
            to: '/publisher/reference/download-analytics',
          },
          {
            from: ['/publisher/guides/image-cache'],
            to: '/publisher/faq/image-cache'
          },
          {
            from: ['/publisher/guides/chapter-marks'],
            to: '/publisher/faq/chapter-marks'
          },
          {
            from: ['/publisher/guides/episode-images'],
            to: '/publisher/faq/episode-images'
          },
          {
            from: ['/publisher/guides/understanding-templates'],
            to: '/publisher/guides/templates'
          },
          {
            from: ['/publisher/guides/slacknotes'],
            to: '/publisher/modules/slacknotes'
          }
        ],
      },
    ],
  ],
};
