type Where = 'home' | 'app'

export type Navigation = {
  name: string
  to: string
  icon: string
}

export function getNavigation(where: Where): Record<string, Navigation> | [] {
  const url = '/gh-deploy'
  switch (where) {
    case 'home':
      return {
        home: {
          name: 'Home',
          to: `${url}/`,
          icon: 'lucide:home',
        },
        works: {
          name: 'Works',
          to: `${url}/works`,
          icon: 'lucide:briefcase',
        },
        writing: {
          name: 'Writing',
          to: `${url}/writing`,
          icon: 'lucide:library',
        },
        about: {
          name: 'About',
          to: `${url}/about`,
          icon: 'lucide:user',
        },
        contact: {
          name: 'Contact',
          to: `${url}/contact`,
          icon: 'lucide:mail',
        },
      }
    default:
      return []
  }
}
