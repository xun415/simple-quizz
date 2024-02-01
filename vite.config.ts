import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // gh-pages config
  base: '/simple-quizz/',
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ['./setupTests.ts'],
    deps: {
      inline: ['vitest-canvas-mock'],
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve('src/') },
      { find: '@assets', replacement: path.resolve('src/assets') },
      { find: '@components', replacement: path.resolve('src/components') },
      { find: '@utils', replacement: path.resolve('src/utils') },
      { find: '@apis', replacement: path.resolve('src/apis/') },
      { find: '@hooks', replacement: path.resolve('src/hooks/') },
      { find: '@store', replacement: path.resolve('src/store/') },
      { find: '@router', replacement: path.resolve('src/router/') },
    ],
  },
})
