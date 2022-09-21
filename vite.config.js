import { defineConfig } from 'vite'
import { createVuePlugin } from "vite-plugin-vue2";
import eslint from 'vite-plugin-eslint'


export default defineConfig({
  plugins: [eslint(), createVuePlugin()],
  server: {
    port: 3000
  },
  preview: {
    port: 8080
  }
})
