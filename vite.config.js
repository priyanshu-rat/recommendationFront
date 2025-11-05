import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allow external connections
    allowedHosts: [
      '.ngrok-free.app',
      '.ngrok-free.dev',
      '.loca.lt',
      '.trycloudflare.com'
    ],
  },
})
