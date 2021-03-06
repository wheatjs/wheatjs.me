import { ViteSSG } from 'vite-ssg'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import './styles/main.css'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
