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
          { text: 'February 2025', link: '/roadmap/2025/february/'},
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
            text: 'Vehicles',
            items: [
              { text: 'BR 140 LP', link: '/projects/br-140-lp' },
              { text: 'BR 193 EP', link: '/projects/br-193-ep' },
              { text: 'BR 294 EP', link: '/projects/br-294-ep' },
              { text: 'BR 612 EP', link: '/projects/br-612-ep' },
              { text: 'Bnrdzf 483.0 Soundmod', link: '/projects/bnrdzf-483'}
            ]
          },
          {
            text: 'Misc',
            items: [
              { text: 'Station PIS Boards', link: '/projects/misc/pis-boards.md' },
              { text: 'LA Fix', link: '/projects/misc/la-fix.md' }
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
              { text: 'August', link: '/roadmap/2025/august' },
              { text: 'February', link: '/roadmap/2025/february'}
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
      { icon: 'youtube', link: 'https://www.youtube.com/@Bahnpfuschhochschule' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tram-front"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><path d="M8 15h.01"/><path d="M16 15h.01"/></svg>' }, link: 'https://www.trainsimcommunity.com/user/bahnpfuschhochschule'}
    ],

    footer: {
      copyright: 'Copyright © 2026, <a href="https://github.com/Bahnpfuschhochschule">BPH</a>'
    },

    search: {
      provider: 'local'
    }
  },

  lastUpdated: true,

  head: [
    [
      'link',
      { 
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'link',
      { 
        rel: 'icon', 
        type: 'image/png', 
        sizes: '32x32', 
        href: '/bph_logo.png' 
      }
    ],
    [
      'link',
      { 
        rel: 'apple-touch-icon', 
        sizes: '180x180', 
        href: '/bph_logo.png' 
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
