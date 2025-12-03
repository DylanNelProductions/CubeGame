import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative paths for assets so it works on any host
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 5173,
    strictPort: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})

