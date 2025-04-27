import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
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
    server: {
      port: env.VITE_PORT,
      open: true,
      host: true,
      proxy: {
        '/api/database': {
          target: env.VITE_SUPABASE_URL,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\/database/, ''),
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
            'Access-Control-Allow-Credentials': 'true',
          },
        },
      },
    },
  };
});
