import { createApp} from 'vue'
import App from './App.vue'
// import lawnUi from '../packages/main'

// 测试打包资源
import lawnUi from '../dist/lawn-ui.es'
import '../dist/style.css'
createApp(App).use(lawnUi).mount('#app')
