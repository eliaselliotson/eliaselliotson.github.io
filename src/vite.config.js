import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// derive __dirname in ESM
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: '../build',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        '404': resolve(__dirname, '404.html'),
        googleVerification: resolve(__dirname, 'google0e1dd233d3ea12dd.html'),
      },
    },
  },
})
