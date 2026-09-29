import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// The library build (`yarn build`): what is published to npm. The demo
// application is built with vite.config.js (`yarn build:demo`).
//
// Vue, PrimeVue and KaTeX are peer dependencies: left as imports for the
// host's bundler to resolve, so the host has one copy of each.
const external = /^(vue|primevue|@primeuix|katex)(\/|$)/

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'math-field',
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // public/ holds the demo's favicon, which isn't part of the library.
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      formats: ['es'],
      fileName: 'vue3-math-editor',
      cssFileName: 'style',
    },
    rolldownOptions: {
      external: (id) => external.test(id),
    },
  },
})
