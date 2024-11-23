import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      // Proxy API requests to Cloudinary
      '/api': {
        target: 'https://api.cloudinary.com',  // The Cloudinary API URL
        changeOrigin: true,  // Ensures the origin header is modified to match the target
        rewrite: (path) => path.replace(/^\/api/, ''),  // Strips '/api' from the request URL
      },
    },
  },
});
