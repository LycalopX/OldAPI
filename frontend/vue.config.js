const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    teste: {
      entry: 'src/pages/teste/main.js',
      template: 'public/index.html',
      filename: 'teste.html',
      title: 'Item 2',
      chunks: ['chunk-vendors', 'chunk-common', 'teste']
    },
    error: {
      entry: 'src/pages/error/main.js',
      template: 'public/index.html',
      filename: 'error.html',
      title: 'Error page',
      chunks: ['chunk-vendors', 'chunk-common', 'error']
    },
    donate: {
      entry: 'src/pages/donate/main.js',
      template: 'public/index.html',
      filename: 'donate.html',
      title: 'Donate page',
      chunks: ['chunk-vendors', 'chunk-common', 'donate']
    },
    home: {
      entry: 'src/pages/home/main.js',
      template: 'public/index.html',
      filename: 'home.html',
      title: 'Donate page',
      chunks: ['chunk-vendors', 'chunk-common', 'home']
    },
    obrigado: {
      entry: 'src/pages/obrigado/main.js',
      template: 'public/index.html',
      filename: 'obrigado.html',
      title: 'Donate page',
      chunks: ['chunk-vendors', 'chunk-common', 'obrigado']
    }
  }
})