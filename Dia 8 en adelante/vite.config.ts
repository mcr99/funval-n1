import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build:{
    rollupOptions:{
      input: {
        main: resolve(__dirname, 'index.html'),
        dia9S: resolve(__dirname, 'pages/dia9_summary.html'),
        dia9e: resolve(__dirname, 'pages/dia9_ejecicio.html'),
      }
    }
  }
})