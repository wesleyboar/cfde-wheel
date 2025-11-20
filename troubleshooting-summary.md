# CFDE Wheel Browser Build Troubleshooting Summary

## Goal
Get `index.browser.js` working in browser via importmap for Django CMS site.

## Original Error
```
Uncaught Error: Dynamic require of "react" is not supported
    at index.browser.js:1:791
```

## Root Cause
tsup was externalizing ALL dependencies (React, MUI, Emotion) by default because they're listed in `dependencies`. Only React was provided via importmap, causing import resolution failures for MUI/Emotion.

## Solution Implemented

### Modified `tsup.config.ts`
Added `noExternal: [/.*/]` to force bundling of everything except explicitly external packages:

```typescript
{
  entry: ['src/index.tsx'],
  format: ['esm'],
  platform: 'browser',
  outDir: 'dist',
  outExtension: () => ({ js: '.browser.js' }),
  external: ['react', 'react-dom', 'react/jsx-runtime', 'react-dom/client'],
  noExternal: [/.*/],  // Bundle EVERYTHING except what's in external
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  minify: true
}
```

**Key Insight**: `noExternal: [/.*/]` overrides tsup's default behavior of externalizing `dependencies`, forcing it to bundle MUI and Emotion into the browser build.

### Simplified HTML importmap
Only provide React (removed MUI/Emotion since they're now bundled):

```json
{
  "imports": {
    "react": "https://esm.sh/react@19.1.0",
    "react/jsx-runtime": "https://esm.sh/react@19.1.0/jsx-runtime",
    "react-dom": "https://esm.sh/react-dom@19.1.0",
    "react-dom/client": "https://esm.sh/react-dom@19.1.0/client"
  }
}
```

## Build Results
- `index.browser.js`: **174KB** (was 6KB) - confirms MUI/Emotion are bundled
- `index.js` (CJS): 6.7KB - unchanged
- `index.mjs` (ESM): 5.9KB - unchanged
- Git diff: +41 −8 lines

## Current Status
✅ Build successful - 174KB browser bundle created  
✅ MUI and Emotion bundled into `index.browser.js`  
✅ React externalized for importmap  
❌ **New error**: `Cannot read properties of null (reading 'useState')`

### Current Error
```
Uncaught TypeError: Cannot read properties of null (reading 'useState')
    at W.useState (index.browser.js:1:9621)
    at Dv (index.browser.js:74:76766)
```

**This is a React instance mismatch issue** - the bundled MUI/Emotion code is using a different React instance than what's provided by the importmap.

## What Works
- ✅ Storybook build (uses `index.js`/`index.mjs`)
- ✅ NPM package for Node consumers
- ❌ Browser ESM bundle with importmap

## Key Learnings

### tsup Default Behavior
- By default, tsup externalizes packages in `dependencies` and `peerDependencies`
- This is correct for npm libraries but wrong for standalone browser bundles
- `noExternal: [/.*/]` forces bundling while respecting `external` array

### Import Map Issues Encountered
1. **Trailing slash validation**: Import map spec requires matching slashes
2. **Query parameters**: Can't mix trailing slashes with query params
3. **CDN reliability**: esm.run hangs, jsdelivr has CORS issues
4. **Scoped imports**: Maintaining per-component imports is impractical

## Next Steps for New Chat

### Potential Solutions to Explore

1. **React Version Compatibility**
   - MUI 5.x doesn't fully support React 19
   - Try downgrading to React 18 in both `package.json` and importmap
   
2. **Alternative Bundler**
   - Try Rollup or esbuild with better peer dependency handling
   - Vite library mode might handle this better
   
3. **Singleton React Pattern**
   - Investigate bundler options to ensure single React instance
   - webpack's `ModuleFederationPlugin` approach
   
4. **UMD Build Instead**
   - Create a UMD build that expects global React
   - Load React traditionally via `<script>` tag

## Reference Files

### Current package.json dependencies
```json
{
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@mui/material": "^5.17.1",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "tailwindcss": "^4.1.8",
    "tsup": "^8.4.0",
    "typescript": "^5.8.3"
  }
}
```

### GitHub PR
https://github.com/wesleyboar/cfde-wheel/pull/4/files

## Questions to Address in New Chat

1. Why is the bundled MUI getting a null React instance when React is provided via importmap?
2. Is there a way to ensure the bundled code uses the importmap React?
3. Should we abandon ESM + importmap approach entirely and use UMD?
4. Is React 19 compatibility with MUI 5 the real issue here?
