import { createRouter,createWebHashHistory} from 'vue-router'

import Index from '@/pages/frontend/index.vue'
import Login from '@/pages/admin/login.vue'

const routes = [
    {
        path: '/',
        component: Index,

        //name: 'Weblog首页'
        meta: {
            title: 'Weblog 首页'
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: 'Weblog 登录页'
        }
    },
]

const router = createRouter({
    // 指定路由的历史管理方式，hash 模式指的是 URL 的路径是通过 hash 符号（#）进行标识
    history: createWebHashHistory(),
    routes: routes
})

// ES6 模块导出语句，它用于将 router 对象导出，以便其他文件可以导入和使用这个对象
export default router