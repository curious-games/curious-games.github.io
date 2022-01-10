import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import VuePlyr from 'vue-plyr'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

const i18n = createI18n({
  
})

createApp(App).use(router).use(i18n).use(store).use(VuePlyr).mount('#app')
