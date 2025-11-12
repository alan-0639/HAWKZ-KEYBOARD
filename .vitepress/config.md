import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mts'
import nav from './nav.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/HAWKZ-KEYBOARD/',
  title: "Costom Keyboard ",
  description: "机械键盘爱好者的乐园", 

  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
     logo: '/LOGO.jpg',


    nav:nav,

    sidebar:sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
