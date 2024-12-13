import { defineConfig } from 'vite'
import commonjs from 'vite-plugin-commonjs'
import { createRequire } from 'module'
import react from '@vitejs/plugin-react'

const require = createRequire(import.meta.url)
const webpack = require('webpack')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), commonjs()],
  define: {
    'process.env': {}
  },
  build: {
    rollupOptions: {
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
        }),
      ],
    },
  },
})
