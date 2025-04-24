import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist/vippromax-livechat',
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/popup-standalone.js'),
      name: 'VippromaxLiveChat',
      fileName: 'popup-standalone',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'popup-standalone.min.js',
        extend: true,
        inlineDynamicImports: true,
      },
    },
    minify: true,
  },
});
