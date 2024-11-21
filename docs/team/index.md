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
      { icon: '', link: 'https://www.trainsimcommunity.com/user/foobian' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/105156761?v=4',
    name: 'Redstoneia',
    links: [
      { icon: 'github', link: 'https://github.com/Redstoneia' },
      { icon: '', link: 'https://www.trainsimcommunity.com/user/redstoneia' }
    ]
  },
  {
    avatar: 'https://www.trainsimcommunity.com/user-avatar/manny?width=192',
    name: 'Manny',
    links: [
      { icon: '', link: 'https://www.trainsimcommunity.com/user/manny' }
    ]
  }
]
</script>

# The people behind BPH

Our Team consists of:

<VPTeamMembers size="small" :members="members" />