import { createApp } from 'vue'
// import VueMeta from 'vue-meta'
import VuePlyr from 'vue-plyr'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'


createApp(App).use(router).use(store).use(VuePlyr).mount('#app')
