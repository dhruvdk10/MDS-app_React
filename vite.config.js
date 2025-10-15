import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Correct base for your repo: https://dhruvdk10.github.io/MDS-app_React/
export default defineConfig({
  base: '/MDS-app_React/',
  plugins: [react()]
})
