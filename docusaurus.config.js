// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ender IO',
  tagline: 'It\'s Enderios time!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://enderio.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Team-EnderIO', // Usually your GitHub org/user name.
  projectName: 'EnderIO', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Team-EnderIO/Website/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Team-EnderIO/Website/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Ender IO',
        logo: {
          alt: 'The Enderface',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            type: 'docSidebar',
            sidebarId: 'technicalSidebar',
            position: 'left',
            label: 'Technical Details',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Team-EnderIO/EnderIO',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guide',
                to: '/docs/guide',
              },
              {
                label: 'Wiki',
                to: '/docs/wiki',
              },
              {
                label: 'Technical Details',
                to: '/docs/technical',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'CurseForge',
                href: 'https://www.curseforge.com/minecraft/mc-mods/ender-io',
              },
              {
                label: 'Modrinth',
                href: 'https://modrinth.com/mod/enderio',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/sgYk3Jr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Team-EnderIO/EnderIO',
              },
            ],
          },
        ],
        copyright: `Built with 💖 by Team Ender IO. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  customFields: {
    aklizUrl: "https://www.akliz.net/enderio",
    curseforgeUrl: "https://www.curseforge.com/minecraft/mc-mods/ender-io",
    modrinthUrl: "https://modrinth.com/mod/enderio",
  }
};

module.exports = config;
