// vue router
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { createApp } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  strict: true
})

export const setupRouter = (app: ReturnType<typeof createApp>) => {
  app.use(router)
}

export default router
