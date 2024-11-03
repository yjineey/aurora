export default defineAppConfig({
  appName: "Aurora Portfolio",
  appDescription: 
    "Development portfolio ❤️ by yjineey",
  profilePicture: "/assets/profilePicture2.png",
  footerName: "yjineey",
  email: "did3706@naver.com",
  phone: "(+82) 10 2567 3706",
  openGraphImage: "https://yjineey.github.io/aurora/aurora-main.png",
  socials: {
    github: 'https://github.com/',
    twitter: 'https://twitter.com/',
    linkedin: 'https://www.linkedin.com/',
    instagram: "https://www.instagram.com/",
    spotify: 'https://open.spotify.com/',
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
