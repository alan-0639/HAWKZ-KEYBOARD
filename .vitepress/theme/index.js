// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Layout from './layout.vue'
import './custom.css'
import './style.css'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout,
  
  setup() {
    const route = useRoute()
    
    // 初始化图片放大功能
    const initImageZoom = () => {
      // 获取所有文档中的图片
      const images = document.querySelectorAll('.vp-doc img')
      
      images.forEach(img => {
        // 移除可能已存在的事件监听器
        img.removeEventListener('click', handleImageClick)
        // 添加点击事件
        img.addEventListener('click', handleImageClick)
      })
    }
    
    // 图片点击处理函数
    const handleImageClick = function(e) {
      // 创建模态框覆盖层
      const overlay = document.createElement('div')
      overlay.className = 'img-zoom-overlay active'
      
      // 创建图片内容容器
      const imgContent = document.createElement('div')
      imgContent.className = 'img-zoom-content'
      
      // 创建新的图片元素
      const zoomedImg = document.createElement('img')
      zoomedImg.src = this.src
      zoomedImg.alt = this.alt || '放大图片'
      zoomedImg.style.maxWidth = '100%'
      zoomedImg.style.maxHeight = '100%'
      zoomedImg.style.borderRadius = '4px'
      
      // 组装结构
      imgContent.appendChild(zoomedImg)
      overlay.appendChild(imgContent)
      document.body.appendChild(overlay)
      
      // 禁止背景滚动
      document.body.style.overflow = 'hidden'
      
      // 点击模态框关闭
      const closeOverlay = () => {
        document.body.removeChild(overlay)
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleEscKey)
      }
      
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
          closeOverlay()
        }
      })
      
      // ESC 键关闭
      const handleEscKey = (e) => {
        if (e.key === 'Escape') {
          closeOverlay()
        }
      }
      document.addEventListener('keydown', handleEscKey)
    }
    
    // 页面加载后初始化
    onMounted(() => {
      setTimeout(initImageZoom, 100)
    })
    
    // 路由变化后重新初始化
    watch(() => route.path, () => {
      setTimeout(initImageZoom, 300)
    })
  }
}