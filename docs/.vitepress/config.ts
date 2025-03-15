import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'DynamicForms Vuetify Actions',
  description: 'A responsive library for rendering actions (buttons, links) in Vue.js applications with Vuetify, \n' +
    'integrated with @dynamicforms/vue-forms.',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api/' },
      { text: 'Examples', link: '/examples/component-example' }
    ],
    sidebar: {
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Component example', link: '/examples/component-example' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/velis74/dynamicforms-vuetify-actions' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Jure Erznožnik'
    }
  }
});

