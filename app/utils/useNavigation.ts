type Where = 'home' | 'app'

export type Navigation = {
  name: string
  to: string
  icon: string
}

export function getNavigation(where: Where): Record<string, Navigation> {
  switch (where) {
    case 'home':
      return {
        home: {
          name: 'Home',
          to: '/',
          icon: 'lucide:home',
        },
        works: {
          name: 'Works',
          to: '/works',
          icon: 'lucide:briefcase',
        },
        // writing: {
        //   name: 'Writing',
        //   to: '/writing',
        //   icon: 'lucide:notepad-text',
        // },
        hobby: {
          name: 'Hobby',
          to: '/hobby',
          icon: 'lucide:ferris-wheel',
        }, 
        // contact: {
        //   name: 'Contact',
        //   to: '/contact',
        //   icon: 'lucide:mail',
        // },     
        github: {
          name: 'Github',
          to: 'https://github.com/yjineey/aurora',
          icon: 'lucide:github',
        },
        about: {
          name: 'About',
          to: '/about',
          icon: 'lucide:user',
        },
      }
    default:
      return [] // 빈 객체 반환
  }
}
