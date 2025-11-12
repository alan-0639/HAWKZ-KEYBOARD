import { defineConfig } from 'vitepress'

// 导入导航栏配置
import navZhHK from './nav/zh-HK.mts'
import navZhCN from './nav/zh-CN.mts'
import navEnUS from './nav/en-US.mts'

// 导入侧边栏配置
import sidebarZhHK from './sidebar/zh-HK.mts'
import sidebarZhCN from './sidebar/zh-CN.mts'
import sidebarEnUS from './sidebar/en-US.mts'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/HAWKZ-KEYBOARD/',
  title: "Custom Keyboard",
  description: "機械鍵盤愛好者的樂園",

 // srcDir: 'zh-HK', // 明确指定源文件目录
  // 多语言配置
  locales: {
    // 香港繁体中文作为默认语言 (root)
    root: {
      label: '繁體中文 (香港)',
      lang: 'zh-HK',

      link: '/zh-HK', 

      themeConfig: {
        nav: navZhHK,
        sidebar: sidebarZhHK,
        
        // 香港繁体中文的界面文本
        docFooter: {
          prev: '上一頁',
          next: '下一頁'
        },
        outline: {
          label: '本頁目錄'
        },
        lastUpdated: {
          text: '最後更新於'
        },
        darkModeSwitchLabel: '外觀',
        sidebarMenuLabel: '選單',
        returnToTopLabel: '返回頂部',
        
        // 搜索配置
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索文檔',
                buttonAriaLabel: '搜索文檔'
              },
              modal: {
                noResultsText: '無法找到相關結果',
                resetButtonTitle: '清除查詢條件',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換'
                }
              }
            }
          }
        }
      }
    },

    // 简体中文
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN',
      themeConfig: {
        nav: navZhCN,
        sidebar: sidebarZhCN,
        
        // 简体中文的界面文本
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '本页目录'
        },
        lastUpdated: {
          text: '最后更新于'
        },
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        
        // 搜索配置
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    // 英文
    'en-US': {
      label: 'English',
      lang: 'en-US',
      link: '/en-US/',
      themeConfig: {
        nav: navEnUS,
        sidebar: sidebarEnUS,
        
        // 英文的界面文本
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        outline: {
          label: 'On this page'
        },
        lastUpdated: {
          text: 'Last updated'
        },
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Back to top',
        
        // 搜索配置
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate'
                }
              }
            }
          }
        }
      }
    }
  },

  // 全局主题配置
  themeConfig: {
    logo: '/LOGO.jpg',
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    // 页脚配置
    footer: {
      message: 'Released under the MIT License.',
      //message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 HAWKZ KEYBOARD'
    },
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },
  
  // 最后更新时间
  lastUpdated: true,
  
  // 大纲深度
  outline: {
    level: [2, 3]
  }
})
