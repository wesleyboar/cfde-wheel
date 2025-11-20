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
    format: ['esm'],
    platform: 'browser',
    outDir: 'dist',
    outExtension: () => ({ js: '.browser.js' }),
    external: ['react', 'react-dom', 'react/jsx-runtime', 'react-dom/client'],
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    minify: true,
    noExternal: ['@mui/material', '@emotion/react', '@emotion/styled']
  },
]);
