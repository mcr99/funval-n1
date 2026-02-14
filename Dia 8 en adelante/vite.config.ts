import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { dirname, resolve } from 'path'

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
        d9EP: resolve(__dirname, 'pages/dia9_materia_estudio.html'),
        d10E: resolve(__dirname, 'pages/dia10_ejercicio.html'),
        d10ME: resolve(__dirname, 'pages/dia10_material_estudio.html'),
        d11EC: resolve(__dirname, "pages/dia11_ejercicio_clase.html"),
        d11P: resolve(__dirname, "pages/dia11_practica.html"),
        d12P: resolve(__dirname, "pages/dia12_practica.html"),
        d13F: resolve(__dirname, "pages/dia13_funciones.html"),
        d13P: resolve(__dirname, "pages/dia13_practica.html"),
      }
    }
  }
})