import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import FrontUI from '../packages/index'
import SvgIcon from '@/components/SvgIcon/index.vue'
import '@/styles/index.ts'
// import '../packages/theme/index.less'
const req = require.context('@/icons', false, /\.svg$/)
const requireAll = (requireContext: any) =>
  requireContext.keys().map(requireContext)
requireAll(req)

const app = createApp(App)

app.use(router)
  .use(FrontUI)
  .component('svg-icon', SvgIcon)
  .mount('#app')
