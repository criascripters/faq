import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FAQ do CriaScript',
  tagline: 'FAQ oficial para você, burrão',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://faq.criascript.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'criascript', // Usually your GitHub org/user name.
  projectName: 'criascript-faq', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/criascript/criascript-faq/tree/main/docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'FAQ do CriaScript',
      logo: {
        alt: 'CriaScript Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Comece por aqui',
        },
        {
          href: 'https://github.com/criascript/criascript-faq',
          label: 'Veja no GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Comece por aqui',
          items: [
            {
              label: 'Início',
              to: '/',
            },
          ],
        },
        {
          title: 'Redes Sociais',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/jMhGXNAUTq',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@criascript',
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/criascript/"
            },
            {
              label: "TikTok",
              href: "https://www.tiktok.com/@criascript"
            }
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
