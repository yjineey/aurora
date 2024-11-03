export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  app: {
    baseURL: '/aurora/',
    head: {
      viewport: "width=device-width, initial-scale=1",
      charset: "utf-8",
      script: [
        {
          src: "https://analytics.hrcd.fr/js/script.js",
          defer: true,
          "data-domain": "yjineey.github.io/aurora",
        },
      ],
    },
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  target: "static",
  build: {
    publicPath: '/aurora/_nuxt/' // 빌드된 Nuxt 파일 경로
  },
  router: {
    base: "/aurora/",
  },
  routeRules: {
    "/": { isr: true, prerender: true },
  },

  site: {
    url: process.env.NUXT_SITE_URL || "https://yjineey.github.io/aurora",
    identity: {
      type: "Person",
    },
    twitter: "",
  },

  css: ["~/assets/style/main.css"],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      available: process.env.NUXT_PUBLIC_AVAILABLE,
      meetingLink: process.env.NUXT_PUBLIC_MEETING_LINK,
    },
    private: {
      resendApiKey: process.env.NUXT_PRIVATE_RESEND_API_KEY,
    },
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
  },

  devtools: {
    enabled: true,
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/ui",
    "nuxt-svgo",
    "@nuxt/content",
    "@nuxthq/studio",
    "@nuxt/image",
    "nuxt-og-image",
    "@nuxt/fonts",
  ],

  image: {
    format: ["webp"],
    screens: {
      avatar: 96,
      cover: 256,
      project: 1536,
      projectLg: 3072,
    },
  },

  imports: {
    presets: [
      {
        from: "vue-sonner",
        imports: ["toast"],
      },
    ],
  },

  i18n: {
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    baseUrl: "/",
    locales: [ "en"],
    defaultLocale: "en",
    vueI18n: "~/i18n.config.ts",
  },

  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ["/sitemap.xml", "/", "/works", "/hobby", "/about"],
    },
  },

  content: {
    watch: {
      ws: {
        showURL: false,
      },
    },
    highlight: {
      theme: "github-dark",
    },
    navigation: {
      fields: ["image", "_id"],
    },
    markdown: {
      anchorLinks: false,
    },
    locales: ["en"],
    defaultLocale: "en",
  },

  svgo: {
    autoImportPath: "./assets/logo/",
  },

  compatibilityDate: "2024-10-28",
});
