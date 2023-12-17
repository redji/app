import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import path, { parse } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint()],
  resolve: {
    alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
        vue: path.resolve(`./node_modules/vue`),
    }
  },
  build: {
    emptyOutDir: true,
  },
})
