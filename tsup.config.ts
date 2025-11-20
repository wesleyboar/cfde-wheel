import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.tsx'],
    format: ['cjs', 'esm'],
    sourcemap: false,
    clean: true,
    outDir: 'dist',
    minify: true,
    dts: true
  },
  {
    entry: ['src/index.tsx'],
    format: ['iife'],
    platform: 'browser',
    outDir: 'dist',
    outExtension: () => ({ js: '.browser.js' }),
    globalName: 'CFDEWheel',
    external: ['react', 'react-dom'],
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    minify: true,
    sourcemap: false,
  },
]);
