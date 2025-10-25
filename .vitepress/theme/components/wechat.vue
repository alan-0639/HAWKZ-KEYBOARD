<template>
  <div>
    <!-- 微信悬浮按钮 -->
    <div 
      class="wechat-float-btn" 
      @click="showModal"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M8.691 2.012C3.92 2.012 0 5.81 0 10.438c0 1.835.736 3.559 2.026 4.893a.632.632 0 0 1 .187.447l-.044 2.773a.632.632 0 0 0 .932.553l3.063-1.808a.63.63 0 0 1 .428-.1 9.784 9.784 0 0 0 2.011.208c4.772 0 8.691-3.798 8.691-8.426S13.463 2.012 8.691 2.012zm-4.33 7.763a.947.947 0 1 1 .947-.947.947.947 0 0 1-.947.947zm4.33 0a.947.947 0 1 1 .947-.947.947.947 0 0 1-.947.947zm4.33 0a.947.947 0 1 1 .947-.947.947.947 0 0 1-.947.947z"/>
      </svg>
    </div>

    <!-- 模态框 -->
    <div 
      v-if="isModalVisible" 
      class="wechat-modal" 
      @click="hideModal"
    >
      <div class="modal-content" @click.stop>
        <h3>添加微信好友</h3>
        <p>扫描下方二维码</p>
        
        <div class="qrcode-container">
          <div class="qrcode">
            <!-- 在这里替换为您的二维码图片 -->
            <img src="/wechat-QRcode.png" alt="微信二维码">
            <div class="qrcode-placeholder">
<!--            <svg width="80" height="80" viewBox="0 0 24 24" fill="#07c160">
                <path d="M8.691 2.012C3.92 2.012 0 5.81 0 10.438c0 1.835.736 3.559 2.026 4.893a.632.632 0 0 1 .187.447l-.044 2.773a.632.632 0 0 0 .932.553l3.063-1.808a.63.63 0 0 1 .428-.1 9.784 9.784 0 0 0 2.011.208c4.772 0 8.691-3.798 8.691-8.426S13.463 2.012 8.691 2.012zm-4.33 7.763a.947.947 0 1 1 .947-.947.947.947 0 0 1-.947.947zm4.33 0a.947.947 0 1 1 .947-.947.947.947 0 0 1-.947.947zm4.33 0a.947.947 0 1 1 .947-.947.947.947 0 0 1-.947.947z"/>
              </svg>
              <p>微信二维码</p>      -->
            </div>
          </div>
        </div>
        
        <p>添加时请备注：<strong>客制化机械键盘爱好者</strong></p>
        <button class="close-btn" @click="hideModal">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeChat',
  data() {
    return {
      isModalVisible: false,
      hover: false
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
      document.body.style.overflow = 'hidden'
    },
    hideModal() {
      this.isModalVisible = false
      document.body.style.overflow = 'auto'
    },
    handleKeydown(e) {
      if (e.key === 'Escape' && this.isModalVisible) {
        this.hideModal()
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  }
}
</script>

<style scoped>
.wechat-float-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: #07c160;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 12px rgba(7, 193, 96, 0.4);
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s;
}

.wechat-float-btn:hover {
  transform: scale(1.2);
  box-shadow: 0 6px 15px rgba(7, 193, 96, 0.5);
}

.wechat-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  padding: 30px;
  max-width: 400px;
  width: 90%;
  text-align: center;
}

.modal-content h3 {
  margin-bottom: 15px;
  color: #1a365d;
}

.modal-content p {
  margin-bottom: 20px;
  color: #4a5568;
}

.qrcode-container {
  padding: 15px;
  background: white;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 20px;
  border: 1px solid #eaeaea;
}

.qrcode {
  width: 200px;
  height: 200px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.qrcode-placeholder {
  text-align: center;
}

.close-btn {
  background: #718096;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.close-btn:hover {
  background: #4a5568;
}

@media (max-width: 768px) {
  .wechat-float-btn {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
}
</style>