import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/booking': 'http://localhost:3000',
      '/lists': 'http://localhost:3000',
      '/price': 'http://localhost:3000',
    },
  },
  plugins: [react()],
})
