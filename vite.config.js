import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is '/' because the site is served from the root of a custom domain
// (ryanyong.com). If you ever drop the custom domain and serve from a project
// repo instead (username.github.io/repo-name), change base to '/repo-name/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
