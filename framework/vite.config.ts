/* eslint-disable */
import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  server: {
    port: 3008,
    fs: {
      strict: false,
    },
  },
  resolve: {
    alias: {
      '~lib': path.resolve(__dirname, 'lib')
    }
  },
  plugins: [ reactRefresh() ],
})
