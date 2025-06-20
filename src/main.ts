import 'vue/jsx'

import { createApp } from 'vue'

import App from './App.vue'

import { setupRouter } from './router/index'

const setup = async () => {
  const app = createApp(App)

  setupRouter(app)

  app.mount('#app')
}

setup()
