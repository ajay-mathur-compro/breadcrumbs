// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "pinia-plugin-persistedstate/nuxt"],
  css: ["../assets/css/global.css"],
  compatibilityDate: "2025-04-07",
  vite: {
    plugins: [tailwindcss()],
  },
});
