import { createApp } from 'vue'
// import { createI18n } from 'vue-i18n'
import VuePlyr from 'vue-plyr'
import App from './App.vue'
import router from './router'
import store from './store'
import { createMetaManager } from 'vue-meta'
import './index.css'


createApp(App)
.use(router)
.use(store)
.use(createMetaManager())
.use(VuePlyr)
.mount('#app')
