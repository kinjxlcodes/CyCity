import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // This resolves '@' to the 'src' folder
    },
  },
  base: '/CyCity/', // Change this if deploying to a subfolder (e.g., '/my-app/')
})

