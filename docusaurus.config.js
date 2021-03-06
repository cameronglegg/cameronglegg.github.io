const remarkImages = require('remark-images');
const rehypeTruncate = require('rehype-truncate');

module.exports = {
  title: 'Stirling Docs',
  tagline: 'The How and Why.',
  url: 'https://cameronglegg.github.io',
  baseUrl: '/cameronglegg.github.io/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cameron@stirlingwoodworks.com', // Usually your GitHub org/user name.
  projectName: 'cameronglegg.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Stirling Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // Commented Out Blog {to: 'blog', label: 'Blog', position: 'left'},
        // Commented Out the Top Github Link{
          // href: 'https://github.com/cameronglegg/stirling_docs',
          // label: 'GitHub',
          // position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Site Measurements',
              to: 'docs/doc2/',
            },
            // Added New Style Guide in Footer
            {
              label: 'Style Guide',
              to: 'docs/cheatsheet/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/c/stirling-woodworks/questions',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
              // label: 'Blog',
              // to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/cameronglegg/stirling_docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stirling Woodworks Ltd. Built with Docusaurus.`,
    },
    // This is the Algolia Search Bar.
    algolia: {
      apiKey: '89f91ba142c995e886d2114cb9cfd0d5',
      indexName: 'prod_DOCS',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cameronglegg/stirling_docs',
          remarkPlugins: [remarkImages],
          rehypePlugins: [rehypeTruncate],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/cameronglegg/stirling_docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
