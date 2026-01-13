import { defineConfig } from 'vitepress'

const enNav = [
  { text: 'Guide', link: '/guide/getting-started' },
  { text: 'GitHub', link: 'https://github.com/yldrmahmet/create-ronins-react' }
]

const enSidebar = [
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
]

const zhNav = [
  { text: '指南', link: '/zh/guide/getting-started' },
  { text: 'GitHub', link: 'https://github.com/yldrmahmet/create-ronins-react' }
]

const zhSidebar = [
  {
    text: '介绍',
    items: [
      { text: '什么是 Ronins React?', link: '/zh/guide/what-is-ronins-react' },
      { text: '快速开始', link: '/zh/guide/getting-started' },
      { text: '技术栈', link: '/zh/guide/tech-stack' }
    ]
  },
  {
    text: '指南',
    items: [
      { text: '项目结构', link: '/zh/guide/project-structure' },
      { text: '命令', link: '/zh/guide/commands' },
      { text: '添加组件', link: '/zh/guide/adding-components' },
      { text: 'CLI 选项', link: '/zh/guide/cli-options' }
    ]
  }
]

const esNav = [
  { text: 'Guía', link: '/es/guide/getting-started' },
  { text: 'GitHub', link: 'https://github.com/yldrmahmet/create-ronins-react' }
]

const esSidebar = [
  {
    text: 'Introducción',
    items: [
      { text: '¿Qué es Ronins React?', link: '/es/guide/what-is-ronins-react' },
      { text: 'Comenzar', link: '/es/guide/getting-started' },
      { text: 'Stack Tecnológico', link: '/es/guide/tech-stack' }
    ]
  },
  {
    text: 'Guía',
    items: [
      { text: 'Estructura del Proyecto', link: '/es/guide/project-structure' },
      { text: 'Comandos', link: '/es/guide/commands' },
      { text: 'Agregar Componentes', link: '/es/guide/adding-components' },
      { text: 'Opciones de CLI', link: '/es/guide/cli-options' }
    ]
  }
]

const jaNav = [
  { text: 'ガイド', link: '/ja/guide/getting-started' },
  { text: 'GitHub', link: 'https://github.com/yldrmahmet/create-ronins-react' }
]

const jaSidebar = [
  {
    text: 'はじめに',
    items: [
      { text: 'Ronins React とは?', link: '/ja/guide/what-is-ronins-react' },
      { text: 'クイックスタート', link: '/ja/guide/getting-started' },
      { text: '技術スタック', link: '/ja/guide/tech-stack' }
    ]
  },
  {
    text: 'ガイド',
    items: [
      { text: 'プロジェクト構造', link: '/ja/guide/project-structure' },
      { text: 'コマンド', link: '/ja/guide/commands' },
      { text: 'コンポーネントの追加', link: '/ja/guide/adding-components' },
      { text: 'CLI オプション', link: '/ja/guide/cli-options' }
    ]
  }
]

const koNav = [
  { text: '가이드', link: '/ko/guide/getting-started' },
  { text: 'GitHub', link: 'https://github.com/yldrmahmet/create-ronins-react' }
]

const koSidebar = [
  {
    text: '소개',
    items: [
      { text: 'Ronins React란?', link: '/ko/guide/what-is-ronins-react' },
      { text: '시작하기', link: '/ko/guide/getting-started' },
      { text: '기술 스택', link: '/ko/guide/tech-stack' }
    ]
  },
  {
    text: '가이드',
    items: [
      { text: '프로젝트 구조', link: '/ko/guide/project-structure' },
      { text: '명령어', link: '/ko/guide/commands' },
      { text: '컴포넌트 추가', link: '/ko/guide/adding-components' },
      { text: 'CLI 옵션', link: '/ko/guide/cli-options' }
    ]
  }
]

export default defineConfig({
  vite: {
    server: {
      allowedHosts: true
    }
  },

  title: 'Ronins React',
  description: 'Create modern React apps with Vite, TypeScript, Tailwind, shadcn/ui',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        outline: {
          label: '本页目录'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        lastUpdated: {
          text: '最后更新'
        },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '外观',
        langMenuLabel: '语言'
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      themeConfig: {
        nav: esNav,
        sidebar: esSidebar,
        outline: {
          label: 'En esta página'
        },
        docFooter: {
          prev: 'Anterior',
          next: 'Siguiente'
        },
        lastUpdated: {
          text: 'Última actualización'
        },
        returnToTopLabel: 'Volver arriba',
        sidebarMenuLabel: 'Menú',
        darkModeSwitchLabel: 'Apariencia',
        langMenuLabel: 'Idioma'
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: {
        nav: jaNav,
        sidebar: jaSidebar,
        outline: {
          label: 'ページ内容'
        },
        docFooter: {
          prev: '前へ',
          next: '次へ'
        },
        lastUpdated: {
          text: '最終更新'
        },
        returnToTopLabel: 'トップに戻る',
        sidebarMenuLabel: 'メニュー',
        darkModeSwitchLabel: 'テーマ',
        langMenuLabel: '言語'
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      link: '/ko/',
      themeConfig: {
        nav: koNav,
        sidebar: koSidebar,
        outline: {
          label: '페이지 내용'
        },
        docFooter: {
          prev: '이전',
          next: '다음'
        },
        lastUpdated: {
          text: '마지막 업데이트'
        },
        returnToTopLabel: '맨 위로',
        sidebarMenuLabel: '메뉴',
        darkModeSwitchLabel: '테마',
        langMenuLabel: '언어'
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',

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
