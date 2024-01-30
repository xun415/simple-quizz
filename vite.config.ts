import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ['./setupTests.ts']
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve('src/') },
      { find: '@components', replacement: path.resolve('src/components') },
      { find: '@utils', replacement: path.resolve('src/utils') },
      { find: '@apis', replacement: path.resolve('src/apis/') },
      { find: '@hooks', replacement: path.resolve('src/hooks/') },
      { find: '@store', replacement: path.resolve('src/store/') },
      { find: '@router', replacement: path.resolve('src/router/') },
    ],
  },
})
