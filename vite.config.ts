import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        // @ 替代为 src
      '@': path.resolve(__dirname, './src'),
       // @component 替代为 src/component
      '@components':path.resolve(__dirname, './src/components'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
})
