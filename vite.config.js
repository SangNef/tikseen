import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [tailwindcss(), vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        popup: path.resolve(__dirname, 'src/popup.js'),
        chatPage: path.resolve(__dirname, 'chat-page.html'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'popup') {
            return 'vippromax-livechat/popup.min.js';
          } else {
            return 'vippromax-livechat/[name]-[hash].js';
          }
        },
        chunkFileNames: 'vippromax-livechat/[name]-[hash].js',
        assetFileNames: 'vippromax-livechat/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules/vue')) {
            return 'vue';
          }
        },
        format: 'es',
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    cssCodeSplit: true,
    assetsInlineLimit: 1000000,
    chunkSizeWarningLimit: 1000000,
    brotliSize: false,
    minify: true,
    emptyOutDir: false,
  },
});
