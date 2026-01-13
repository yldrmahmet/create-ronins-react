import { defineConfig } from 'vitepress'

export default defineConfig({
  vite: {
    server: {
      allowedHosts: true
    }
  },

  title: 'Ronins React',
  description: 'Create modern React apps with Vite, TypeScript, Tailwind, shadcn/ui',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'GitHub', link: 'https://github.com/yldrmahmet/create-ronins-react' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Ronins React?', link: '/guide/what-is-ronins-react' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Tech Stack', link: '/guide/tech-stack' }
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Project Structure', link: '/guide/project-structure' },
          { text: 'Commands', link: '/guide/commands' },
          { text: 'Adding Components', link: '/guide/adding-components' },
          { text: 'CLI Options', link: '/guide/cli-options' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yldrmahmet/create-ronins-react' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/create-ronins-react' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 yldrmahmet'
    },

    search: {
      provider: 'local'
    }
  }
})
