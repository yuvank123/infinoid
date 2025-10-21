import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', //only accessible to the local area network(LAN)
    port: 5173,     
    proxy: {
      '/backend': {
        target: 'http://localhost:5000', 
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
