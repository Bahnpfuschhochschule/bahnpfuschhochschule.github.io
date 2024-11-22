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
        activeMatch: '/roadmap/',
        items: [
          { text: 'November 2024', link: '/roadmap/2024/november/'}
        ]
      },
      { text: 'Projects', activeMatch: '/projects/', link: '/projects/' },
      { text: 'Team', activeMatch: '/team/', link: '/team/' },
    ],

    logo: '/bph_logo.png',

    sidebar: [
      {
        text: 'Projects',
        link: '/projects/',
        activeMatch: '/projects/',
        collapsed: false,
        items: [
          { text: 'Route mods',
            items: [
              { text: 'Frankfurt-Fulda EEP', link: '/projects/frankfurt-fulda-eep' },
            ]
          },
          {
            text: 'Vehicle mods',
            items: [
              { text: 'BR 146 SM', link: '/projects/br-146-sm' },
              { text: 'BR 612 EP', link: '/projects/br-612-ep' },
              { text: 'Austrian EMU', link: '/projects/austrian-emu' },
              { text: 'Eanos', link: '/projects/eanos-mini-ep' },
            ]
          }
        ]
      },
      {
        text: 'Team', activeMatch: '/team/', link: '/team/'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bahnpfuschhochschule' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Bahnpfuschhochschule' }
    ],

    footer: {
      copyright: 'Copyright © 2024, <a href="https://github.com/Bahnpfuschhochschule">BPH</a>'
    },

    search: {
      provider: 'local'
    }
  },

  head: [
    [
      'link',
      { 
        rel: 'icon',
        href: '/assets/favicon.png'
      }
    ],
    [
      'script',
      {},
      `
      function resizeIframe(iframe) {
        iframe.height = (iframe.width/16)*9 + "px";
        console.log((iframe.width/16)*9 + "px")
        window.requestAnimationFrame(() => resizeIframe(iframe));
      }`
    ]
  ]
})
