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
    globalName: 'CFDEWheel',
    splitting: false,
    platform: 'browser',
    treeshake: true,
    target: 'es2019',
    outDir: 'dist',
    outExtension: () => ({ js: '.browser.js' }),
    external: [],
    noExternal: [/^./],
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    minify: true
  },
]);
