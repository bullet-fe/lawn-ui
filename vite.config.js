import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    build: {
        lib: {
          entry: ('packages/main.js'),
          name: 'lawnUi',
          fileName:'lawn-ui'
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
        cssCodeSplit: true,
        sourcemap:false
      },
  plugins: [vue()]
})