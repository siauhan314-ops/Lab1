import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-09-27',
  devtools: { enabled: false },
  // css: ['~/assets/css/styles.css'],
  css: ['~/assets/css/styles.css'],
  modules: [],
  components: false,
  ssr: false,
  app: {
    head: {
      title: 'Sweet Scoops for a Cause - Rotary Club Charity Ice Cream Event',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Join Rotary Club in making a difference, one delicious scoop at a time!' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' }
      ]
    }
  }
})