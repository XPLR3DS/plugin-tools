import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    svelte({ preprocess: sveltePreprocess() }),
    dts({
      insertTypesEntry: true,
      include: ['./src/'],
      entryRoot: './src'
    })
  ],
  server: {
    open: '/test/index.html'
  },
  build: {
    sourcemap: true,
    lib: {
      entry: {
        'annotorious-plugin-tools': './src/index.ts',
        'annotorious-plugin-tools-react': './src/react/index.js',
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.es.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        assetFileNames: 'annotorious-plugin-tools.[ext]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      }
    }
  }
});
