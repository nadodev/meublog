// vite.config.js
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import sass from 'vite-plugin-sass-dts';

import path from 'path';

export default defineConfig({

  plugins: [
    laravel({
      input: ['resources/js/app.js', 'resources/js/menu.js'],
      refresh: true,
    }),
    sass(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@css': path.resolve(__dirname, './resources/css')
    }
  },
  esbuild: {
    format: 'UMD',
  },
  build: {
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, 'resources/js/app.js'),
        // Adicione outras entradas aqui, se necessário
      }
    },
    lib: {
      entry: path.resolve(__dirname, "resources/css/filament.css"),
      name: "MyCssLib",
    },
    outDir: "public/dist",
  },
});
