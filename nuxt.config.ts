// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "Faculty Digital Technical Test",
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: "https://awesome-lib.js" },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: "stylesheet", href: "https://awesome-lib.css" },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ":root { color: red }", type: "text/css" },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
    },
    // baseURL: "/your-site-route",
  },

  devtools: { enabled: true },

  experimental: {
    componentIslands: false, //for global components
  },

  components: [
    { path: "~/components", extensions: ["vue"] },
    { path: "~/components/ui", extensions: ["vue"] },
    { path: "~/components/content", extensions: ["vue"] },
  ],
  css: [
    "@/styles/css/tailwind.css",
    "@/styles/css/bootstrap.css",
    "@/styles/css/core.css",
    "@/styles/scss/main.scss",
    "@mdi/font/css/materialdesignicons.min.css",
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-svgo",
  ],
  plugins: ["@/plugins/swiper.client.ts"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/scss/_variables.scss" as *;',
        },
      },
    },
  },

  pinia: {
    storesDirs: [
      //Pinia stores
      "data",
    ],
  },

  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    classSuffix: "",
  },

  runtimeConfig: {
    // server: {
    //   localApiKey: process.env.API_KEY,
    //   localApiSecret: process.env.API_SECRET,
    //   enviroment: process.env.APP_ENVIROMENTS,
    // },
    // public: {
    //   hostUrl: process.env.API_HOST_URL,
    //   iframeUrl: process.env.APP_URL_IFRAME,
    // },
  },
  svgo: {
    componentPrefix: "svg",
    autoImportPath: "./assets/",
  },

  compatibilityDate: "2024-07-22",
});
