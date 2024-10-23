type Where = 'home' | 'app'

export type Navigation = {
  name: string
  to: string
  icon: string
}

export function getNavigation(where: Where): Record<string, Navigation> | [] {
  switch (where) {
    case 'home':
      return {
        home: {
          name: 'Home',
          to: '/gh-deploy/',
          icon: 'lucide:home',
        },
        works: {
          name: 'Works',
          to: '/gh-deploy/works',
          icon: 'lucide:briefcase',
        },
        writing: {
          name: 'Writing',
          to: '/gh-deploy/writing',
          icon: 'lucide:library',
        },
        about: {
          name: 'About',
          to: '/gh-deploy/about',
          icon: 'lucide:user',
        },
        contact: {
          name: 'Contact',
          to: '/gh-deploy/contact',
          icon: 'lucide:mail',
        },
      }
    default:
      return []
  }
}
