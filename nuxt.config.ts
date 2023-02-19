// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    autoImport: false,
  },
  srcDir: "src",
  dir: {
    public: "static",
  },
  typescript: {
    strict: true,
  },
  modules: ["nuxt-icons"],
  css: ["ress", "~/assets/scss/index.scss"],
  // alias: {
  //   "~~": "/<rootDir>",
  //   "@@": "/<rootDir>",
  //   "~": "/<rootDir>",
  //   "@": "/<rootDir>",
  //   assets: "/<rootDir>/assets",
  //   public: "/<rootDir>/public",
  // },
});
