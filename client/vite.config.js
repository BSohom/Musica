import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
/*export default defineConfig({
  plugins: [react()],
  
})*/
export default {
  plugins: [react()],
  preview: {
    port: parseInt(process.env.PORT) || 4173,
    host: '0.0.0.0',
    allowedHosts: ['musica-bsohom-2025.onrender.com'], // ✅ Add your Render domain here
  },
  server: {
    proxy: {
      '/api': 'https://musica-server-bsohom.onrender.com', // assuming backend runs on port 5000
    },
  },
};

