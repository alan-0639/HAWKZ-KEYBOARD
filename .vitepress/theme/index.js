// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Layout from './layout.vue'
import './custom.css'
import './style.css'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

// 只在客户端执行的函数
const setupImageZoom = () => {
  // 检查是否在浏览器环境中
  if (typeof window === 'undefined' || !document) {
    return
  }
  
  const route = useRoute()
  
  const initImageZoom = () => {
    // 安全地获取图片元素
    const doc = document.querySelector('.vp-doc')
    if (!doc) return
    
    const images = doc.querySelectorAll('img')
    
    images.forEach(img => {
      // 确保图片已经加载
      if (img.complete) {
        attachZoomListener(img)
      } else {
        img.addEventListener('load', () => attachZoomListener(img))
      }
    })
  }
  
  const attachZoomListener = (img) => {
    img.removeEventListener('click', handleImageClick)
    img.addEventListener('click', handleImageClick)
    img.style.cursor = 'zoom-in'
  }
  
  const handleImageClick = function(e) {
    const overlay = document.createElement('div')
    overlay.className = 'img-zoom-overlay active'
    
    const imgContent = document.createElement('div')
    imgContent.className = 'img-zoom-content'
    
    const zoomedImg = document.createElement('img')
    zoomedImg.src = this.src
    zoomedImg.alt = this.alt || '放大图片'
    zoomedImg.style.maxWidth = '100%'
    zoomedImg.style.maxHeight = '100%'
    zoomedImg.style.borderRadius = '4px'
    
    imgContent.appendChild(zoomedImg)
    overlay.appendChild(imgContent)
    document.body.appendChild(overlay)
    
    document.body.style.overflow = 'hidden'
    
    const closeOverlay = () => {
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay)
      }
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscKey)
    }
    
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeOverlay()
      }
    })
    
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        closeOverlay()
      }
    }
    document.addEventListener('keydown', handleEscKey)
  }
  
  onMounted(() => {
    setTimeout(initImageZoom, 100)
  })
  
  watch(() => route.path, () => {
    setTimeout(initImageZoom, 300)
  })
}

export default {
  extends: DefaultTheme,
  Layout,
  
  setup() {
    // 只在客户端环境下执行图片放大功能
    if (typeof window !== 'undefined') {
      setupImageZoom()
    }
  }
}