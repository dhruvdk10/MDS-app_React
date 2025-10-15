import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set the `base` to the repository name so assets resolve correctly on GitHub Pages.
// Your GitHub Pages URL will be: https://<owner>.github.io/<repo>/
export default defineConfig({
  base: '/vibe.Inc_React/',
  plugins: [react()]
})
