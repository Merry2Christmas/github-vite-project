import { createApp } from 'vue'
import './style.css'
// iconfont在线方法
import "./assets/styles/iconfont.css"
// iconfont离线方法
// import "./assets/iconfont/iconfont.css"
import App from './App.vue'

// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


// element 主题模式（没搞定）
import 'element-plus/theme-chalk/dark/css-vars.css'
import "./assets/styles/dark/css-vars.css"

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')

