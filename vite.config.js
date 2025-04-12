import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), vue()],
  resolve: {
    alias: {
      "@": "/src",
      "@landing": "/src",
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "landing/assets",
    index: "landing.html",
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
}) 