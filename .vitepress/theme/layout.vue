<template>
  <div>
    <!-- 默认主题布局 -->
    <VPLayout />
    
    <!-- 微信组件 -->
    <WeChat />
  </div>
</template>

<script>
import DefaultTheme from 'vitepress/theme'
import WeChat from './components/wechat.vue'

export default {
  name: 'CustomLayout',
  components: {
    VPLayout: DefaultTheme.Layout,
    WeChat
  }
}
</script>