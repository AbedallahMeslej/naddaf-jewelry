import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.jsx'],
      refresh: true,
    }),
    react(),
    tailwindcss(),
  ],
  server: {
    host: 'localhost',
    port: 5173,
  },
  build: {
    manifest: true,
  },
})