module.exports = {
  srcDir: 'src/',
  mode: 'spa',
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/markdownit',
    '@nuxtjs/blog',
    'nuxt-typescript',
    'qonfucius-nuxt-fontawesome'
  ],
  css: [
    '~~/assets/css/main.scss'
  ],
  fontAwesome: {
    packs: [{
      package: '@fortawesome/fontawesome-free-brands',
      icons: ["faFacebookSquare", "faGooglePlusSquare", "faTwitterSquare"]
    }]
  },
  generate: {
    dir: 'docs'
  }
};
