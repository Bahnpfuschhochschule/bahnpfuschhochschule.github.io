import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bahnpfuschhochschule",
  description: "Official Website of BPH",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/markdown-examples/' },
      { text: 'Team', link: '/team/' },
    ],

    logo: './assets/bph_logo.png',

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Team', link: '/team'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bahnpfuschhochschule' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Bahnpfuschhochschule' }
    ],

    footer: {
      copyright: 'Copyright © 2024, <a href="https://github.com/Bahnpfuschhochschule">BPH</a>'
    }
  }
})
