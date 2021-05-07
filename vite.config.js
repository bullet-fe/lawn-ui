import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import babel from "vite-babel-plugin"


export default defineConfig({
  build: {
    lib: {
      entry: ('packages/main.js'),
      name: 'lawnUi',
      fileName: 'lawn-ui'
    },
    // 默认terser
    minify: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    cssCodeSplit: false,
  },
  rollupOptions: {
  },
  plugins: [
    vue(),
    babel()
  ]
})