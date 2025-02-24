import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FAQ do CriaScript',
  tagline: 'FAQ para você, burrão, saber o que fazer da sua vida',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://faq.criascript.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'criascripters', // Usually your GitHub org/user name.
  projectName: 'faq', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: true,

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
    image: 'img/criascript-banner.jpg',
    navbar: {
      title: 'FAQ do CriaScript',
      logo: {
        alt: 'CriaScript Logo',
        src: 'img/criascript.jpg',
      },
      items: [
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
          title: 'Tá perdido pow?',
          items: [
            {
              label: 'Leia isso aqui primeiro',
              to: '/category/para-burros',
            },
            {
              label: 'Depois isso aqui',
              to: '/category/para-burros',
            },
            {
              label: 'E por fim isso',
              to: '/category/para-burros',
            },
            {
              label: 'Já leu? Leia de novo',
              to: '/category/para-burros',
            },
          ],
        },
        {
          title: 'Redes Sociais do Cria',
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
