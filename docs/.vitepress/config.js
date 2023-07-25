import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Red Diamond Boost",
  titleTemplate: "",
  description: "Red Diamond Boost",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/full-logo.png',
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Services', link: '/services/' },
      // { text: 'Contact Us', link: '/contact' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
  }
})
