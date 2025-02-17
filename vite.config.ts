import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Use the plugin here
  base: './',
  build: {
    outDir: 'dist',
  },
});