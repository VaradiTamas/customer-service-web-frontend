import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueQRCodeComponent from 'vue-qr-generator'

loadFonts()

createApp(App)
    .use(VueAxios, axios)
    .use(router)
    .use(vuetify)
    .component('qr-code', VueQRCodeComponent)
    .mount('#app')
