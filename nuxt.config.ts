// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@formkit/auto-animate",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    ["@nuxtjs/stylelint-module", { lintOnStart: false }],
    ["@nuxtjs/eslint-module", { lintOnStart: false }],
  ],
});
