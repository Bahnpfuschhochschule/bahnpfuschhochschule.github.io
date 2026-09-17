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
    avatar: 'https://images.trainsimcommunity.com/mwGsnaEzKidMIiwU5z0HHKSztSQ=/192x192/filters:format(webp)/tscmr-prod/images/1337132447127252992.png',
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
    avatar: 'https://images.trainsimcommunity.com/ItG4p75AHV4Uz-r9sF5_4lDPOUQ=/192x192/tscmr-prod/images/1513169071999561728.png',
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
    avatar: 'https://images.trainsimcommunity.com/JU-D_BuxnjKRt0CyoIwoRs6Ulx0=/192x192/tscmr-prod/images/1079477698481143808.jpg',
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
    avatar: 'https://images.trainsimcommunity.com/54v2sItX4jL_D9YfPP4t-EEf8lc=/192x192/tscmr-prod/images/1321661218414145536.jpg',
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
    avatar: 'https://images.trainsimcommunity.com/NE6viiRXRo2HbCwqTERpsDLg8c4=/192x192/tscmr-prod/images/1045760033309093888.png',
    name: 'Redstoneia',
    links: [
      { icon: 'github', link: 'https://github.com/Redstoneia' },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
          },
          link: 'https://www.trainsimcommunity.com/user/redstoneia' 
      }
    ]
  },
  {
    avatar: 'https://images.trainsimcommunity.com/8SIgxm1CoDuJ9V8-SWqtrTlEL1U=/192x192/tscmr-prod/images/1375786632517255168.png',
    name: 'Prototype001',
    links: [
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
          },
          link: 'https://www.trainsimcommunity.com/user/414298-prototype001' 
      }
    ]
  },
  {
    avatar: 'https://images.trainsimcommunity.com/JhRLlNL83YHqt62BOe6vOUNvmL4=/192x192/tscmr-prod/images/1340683272346238976.jpg',
    name: 'TaurusCB',
    links: [
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
          },
          link: 'https://www.trainsimcommunity.com/user/599115-taurus-cb' 
      }
    ]
  }
]
</script>

# The people behind BPH

Maybe you've wondered who, the `BPH`, actually are? So for this case we have created this neat page!

<VPTeamMembers size="small" :members="members" />