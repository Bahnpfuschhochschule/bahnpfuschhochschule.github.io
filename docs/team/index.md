<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [

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
    avatar: '/avatars/raphael.webp',
    name: 'Raph',
    links: [
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
        },
        link: 'https://www.trainsimcommunity.com/user/raphael-2' 
      }
    ]
  },
  {
    avatar: '/avatars/evolinox.gif',
    name: 'Evolinox',
    links: [
      { icon: 'github', link: 'https://github.com/Evolinox' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCXXdteIrezyZ_PbtmHTGLgA'}
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
    avatar: 'https://www.trainsimcommunity.com/user-avatar/manny?width=192',
    name: 'Manny',
    links: [
      { icon: 'youtube', link: 'https://www.youtube.com/@mannyderlokfuhrer1463' },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
      },
      link: 'https://www.trainsimcommunity.com/user/manny' }
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
    avatar: '/avatars/mabitze.webp',
    name: 'Mabitze',
    links: [
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
        },
        link: 'https://www.trainsimcommunity.com/user/mabitze' 
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