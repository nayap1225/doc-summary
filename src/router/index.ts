import { createRouter, createWebHistory } from 'vue-router'
import ParserSetup from '../views/ParserSetup.vue'
import PromptStudio from '../views/PromptStudio.vue'
import StudioLayout from '../layouts/StudioLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: StudioLayout,
      redirect: '/parser-setup',
      children: [
        {
          path: 'parser-setup',
          name: 'parser-setup',
          component: ParserSetup
        },
        {
          path: 'prompt-studio',
          name: 'prompt-studio',
          component: PromptStudio
        }
      ]
    }
  ]
})

export default router
