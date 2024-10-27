export default defineAppConfig({
  appName: "Aurora a Nuxt portfolio",
  appDescription:
    "Aurora is a simple but beautiful portfolio for developers built with Nuxt. Made with ❤️ by yjineey",
  profilePicture: "/assets/hugo-richard-light.webp",
  footerName: "yjineey",
  email: "did3706@naver.com",
  phone: "(+82) 10 2567 3706",
  openGraphImage: "https://canvas.hrcd.fr/social-preview.jpg",
  socials: {
    github: "https://github.com/yjineey/aurora",
    notion: "https://www.notion.so",
    instagram: "https://www.instagram.com",
  },
  ui: {
    primary: "emerald",
    gray: "zinc",
    notifications: {
      position: "top-0 bottom-auto",
    },
    notification: {
      progress: {
        base: "absolute bottom-0 end-0 start-0 h-0",
        background: "bg-transparent dark:bg-transparent",
      },
    },
    input: {
      variant: {
        none: "bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out",
      },
    },
    textarea: {
      variant: {
        none: "bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out",
      },
    },
  },
});
