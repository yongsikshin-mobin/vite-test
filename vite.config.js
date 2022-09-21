import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import Inspector from "vite-plugin-vue-inspector"


export default defineConfig({
  plugins: [createVuePlugin(),
    Inspector({
      vue: 2
    }),],
  server: {
    port: 3000
  },
  preview: {
    port: 8080
  }
})
