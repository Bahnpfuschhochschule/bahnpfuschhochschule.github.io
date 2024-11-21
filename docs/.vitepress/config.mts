import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bahnpfuschhochschule",
  description: "Official Website of BPH",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Roadmap',
        items: [
          { text: 'November 2024', link: '/roadmap/2024/november/'}
        ]
      },
      { text: 'Projects', link: '/projects/' },
      { text: 'Team', link: '/team/' },
    ],

    logo: '/bph_logo.png',

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Frankfurt Fulda EP', link: '/projects/frankfurt-fulda-ep' }
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
