import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.tsx'],
    format: ['cjs'],
    sourcemap: false,
    clean: true,
    outDir: 'dist',
  },
  {
    entry: ['src/index.tsx'],
    format: ['iife'],
    globalName: 'CFDEWheel',
    outDir: 'dist',
    outExtension: () => ({ js: '.browser.js' }),
    esbuildOptions(options) {
      options.external = ['react', 'react-dom', 'react/jsx-runtime', '@mui/material', '@emotion/react', '@emotion/styled']
      options.banner = {
        js: `var module = { exports: {} };`
      }
    },
    define: {
      'process.env.NODE_ENV': '"production"'
    },
  },
]);
