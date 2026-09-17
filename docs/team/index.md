<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: '/avatars/evolinox.gif',
    name: 'Evolinox',
    links: [
      { icon: 'github', link: 'https://github.com/Evolinox' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCXXdteIrezyZ_PbtmHTGLgA'}
    ]
  },
  {
    avatar: '/avatars/gerjusilp.webp',
    name: 'GERJUSI LP',
    links: [
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
        },
        link: 'https://www.trainsimcommunity.com/user/gerjusi-lp' 
      }
    ]
  },
  {
    avatar: '/avatars/alexander.gif',
    name: 'Alexander',
    links: [
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
        },
        link: 'https://www.trainsimcommunity.com/user/alexander-l' 
      }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/89279039?v=4',
    name: 'Foobian',
    links: [
      { icon: 'github', link: 'https://github.com/FoobianBlock' },
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
        },
        link: 'https://www.trainsimcommunity.com/user/foobian' 
      }
    ]
  },
  {
    avatar: 'https://www.trainsimcommunity.com/user-avatar/elena?width=96',
    name: 'Elena',
    links: [
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
        },
        link: 'https://www.trainsimcommunity.com/user/elena' 
      }
    ]
  },
  {
    avatar: '/avatars/freddie.webp',
    name: 'Freddie',
    links: [
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
        },
        link: 'https://www.trainsimcommunity.com/user/freddie-the-shepherd' 
      }
    ]
  },
  {
    avatar: '/avatars/justus.webp',
    name: 'Justus',
    links: [
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
        },
        link: 'https://www.trainsimcommunity.com/user/justus' 
      }
    ]
  },
  {
    avatar: 'https://www.trainsimcommunity.com/user-avatar/derm3-2?width=192',
    name: 'Der M3',
    links: [
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
        },
        link: 'https://www.trainsimcommunity.com/user/derm3-2' 
      }
    ]
  },
  {
    avatar: '/avatars/maggus.webp',
    name: 'Maggus',
    links: [
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
        },
        link: 'https://www.trainsimcommunity.com/user/maggus' 
      }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/105156761?v=4',
    name: 'Redstoneia',
    links: [
      { icon: 'github', link: 'https://github.com/Redstoneia' },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
          },
          link: 'https://www.trainsimcommunity.com/user/redstoneia' 
      }
    ]
  }
]
</script>

# The people behind BPH

Maybe you've wondered who, the `BPH`, actually are? So for this case we have created this neat page!

<VPTeamMembers size="small" :members="members" />