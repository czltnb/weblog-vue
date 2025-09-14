import '@/assets/main.css' // 引入 main.css 样式文件

import { createApp } from 'vue'// 引入 createApp 方法
import App from '@/App.vue'// 引入 App.vue 组件
import router from '@/router/index.js'
// 导入 Element Plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)


// 引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 应用路由
app.use(router)
app.mount('#app')

