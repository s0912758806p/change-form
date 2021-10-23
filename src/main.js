import { createApp } from 'vue'
import { pipe } from './assets/utils/pipe'
import App from './App.vue'
import GengUI from './plugins/Geng-ui'

const app = pipe(
  GengUI,
)(createApp(App));

window.$vue = app.mount('#app');