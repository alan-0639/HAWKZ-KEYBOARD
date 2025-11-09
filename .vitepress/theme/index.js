// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Layout from './layout.vue'
import './custom.css'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout
  // 完全移除图片放大相关的 JavaScript 代码
  // 只保留 CSS 悬停效果
}