import viteStylelint from 'vite-plugin-stylelint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    autoImport: false,
  },
  srcDir: 'src',
  dir: {
    public: 'static',
  },
  typescript: {
    strict: true,
  },
  css: ['ress', '~/assets/scss/index.scss'],
  modules: ['nuxt-purgecss', 'nuxt-icons'],
  purgecss: {
    enabled: true,
    safelist: ['nuxt-icon', 'nuxt-icon--fill'],
  },
  vite: {
    plugins: [
      viteStylelint({
        include: [
          'assets/**/*.{css,less,scss,sass,vue}',
          'components/**/*.{css,less,scss,sass,vue}',
          'content/**/*.{css,less,scss,sass,vue}',
          'layouts/**/*.{css,less,scss,sass,vue}',
          'pages/**/*.{css,less,scss,sass,vue}',
          'server/**/*.{css,less,scss,sass,vue}',
          'src/**/*.{css,less,scss,sass,vue}',
          'styles/**/*.{css,less,scss,sass,vue}',
          'app.vue',
          'error.vue',
        ],
      }),
    ],
  },
})
