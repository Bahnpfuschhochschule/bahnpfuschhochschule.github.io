import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bahnpfuschhochschule",
  description: "Official Website of BPH",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', activeMatch: '/projects/', link: '/projects/' },
      { text: 'Roadmaps',
        activeMatch: '/roadmap/',
        items: [
          { text: 'August 2026', link: '/roadmap/2026/august/'},
          { text: 'December 2025', link: '/roadmap/2025/december/'},
          { text: 'August 2025', link: '/roadmap/2025/august/'},
          { text: 'November 2024', link: '/roadmap/2024/november/'}
        ]
      },
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
          {
            text: 'Vehicle mods',
            items: [
              { text: 'BR 140 LP', link: '/projects/br-140-lp' },
              { text: 'BR 193 EP', link: '/projects/br-193-ep' },
              { text: 'BR 612 EP', link: '/projects/br-612-ep' },
              { text: 'Bnrdzf 483.0 Soundmod', link: '/projects/bnrdzf-483'}
            ]
          }
        ]
      },
      {
        text: 'Roadmaps',
        activeMatch: '/roadmap/',
        collapsed: false,
        items: [
          {
            text: '2026',
            collapsed: false,
            items: [
              { text: 'August', link: '/roadmap/2026/august' },
            ]
          },
          {
            text: '2025',
            collapsed: true,
            items: [
              { text: 'December', link: '/roadmap/2025/december'},
              { text: 'August', link: '/roadmap/2025/august' }
            ]
          },
          {
            text: '2024',
            collapsed: true,
            items: [
              { text: 'November', link: '/roadmap/2024/november' },
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
      copyright: 'Copyright © 2026, <a href="https://github.com/Bahnpfuschhochschule">BPH</a>'
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
