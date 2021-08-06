import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const trialApp = createApp(App)
trialApp.use(router)
trialApp.mount('#app')
