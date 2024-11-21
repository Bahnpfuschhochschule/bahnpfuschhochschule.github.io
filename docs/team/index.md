<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/Evolinox.png',
    name: 'Evolinox',
    title: 'Student',
    links: [
      { icon: 'github', link: 'https://github.com/Evolinox' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCXXdteIrezyZ_PbtmHTGLgA'},
      { icon: 'instagram', link: 'https://www.instagram.com/pascal.jedi/' }
    ]
  }
]
</script>

# The people behind BPH

Our Team consists of:

<VPTeamMembers size="medium" :members="members" />