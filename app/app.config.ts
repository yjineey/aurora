export default defineAppConfig({
  appName: "Canvas a Nuxt portfolio template",
  appDescription:
    "Canvas is a simple but beautiful portfolio template for designers and developers built with Nuxt and Tailwind CSS. Made with ❤️ by yjineey",
  profilePicture: "/assets/hugo-richard-light.webp",
  footerName: "yjineey",
  email: "did3706@naver.com",
  twitterUsername: "",
  phone: "(+82) 10 2567 3706",
  openGraphImage: "https://canvas.hrcd.fr/social-preview.jpg",
  socials: {
    github: "https://github.com/yjineey",
    twitter: "https://twitter.com",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    // spotify: "https://www.notion.so/yjineey",
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
