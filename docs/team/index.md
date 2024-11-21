<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/Evolinox.png',
    name: 'Evolinox',
    links: [
      { icon: 'github', link: 'https://github.com/Evolinox' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCXXdteIrezyZ_PbtmHTGLgA'},
      { icon: 'instagram', link: 'https://www.instagram.com/pascal.jedi/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/89279039?v=4',
    name: 'Foobian',
    links: [
      { icon: 'github', link: 'https://github.com/FoobianBlock' },
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
        },
        link: 'https://www.trainsimcommunity.com/user/foobian' 
      }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/105156761?v=4',
    name: 'Redstoneia',
    links: [
      { icon: 'github', link: 'https://github.com/Redstoneia' },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
          },
          link: 'https://www.trainsimcommunity.com/user/redstoneia' 
      }
    ]
  },
  {
    avatar: 'https://www.trainsimcommunity.com/user-avatar/manny?width=192',
    name: 'Manny',
    links: [
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
      },
      link: 'https://www.trainsimcommunity.com/user/manny' }
    ]
  }
]
</script>

# The people behind BPH

Our Team consists of:

<VPTeamMembers size="small" :members="members" />