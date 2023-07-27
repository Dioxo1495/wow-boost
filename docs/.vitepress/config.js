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

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" class="w-6"><title>Join Discrord</title><path fill="currentColor" d="M27.502 6.953A25.28 25.28 0 0 0 21.162 5c-.279.48-.589 1.131-.806 1.643a24.233 24.233 0 0 0-7.022 0A20.16 20.16 0 0 0 12.528 5a24.937 24.937 0 0 0-6.341 1.953c-4.014 5.92-5.1 11.702-4.557 17.405 2.666 1.938 5.239 3.116 7.767 3.89a18.896 18.896 0 0 0 1.658-2.68 16.264 16.264 0 0 1-2.62-1.256c.218-.155.435-.325.636-.496 5.053 2.31 10.526 2.31 15.517 0 .217.17.418.341.635.496-.837.496-1.705.915-2.62 1.255.481.946 1.04 1.845 1.66 2.682a25.694 25.694 0 0 0 7.766-3.89c.666-6.603-1.056-12.338-4.528-17.406ZM11.752 20.84c-1.518 0-2.758-1.38-2.758-3.069s1.209-3.069 2.759-3.069c1.534 0 2.79 1.38 2.758 3.07 0 1.689-1.224 3.068-2.758 3.068Zm10.185 0c-1.519 0-2.76-1.38-2.76-3.069s1.21-3.069 2.76-3.069c1.535 0 2.79 1.38 2.76 3.07 0 1.689-1.21 3.068-2.76 3.068Z"/></svg>',
        },
        link: '#',
        ariaLabel: 'Join Discrord',
      }
      // { icon: 'discord', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
})
