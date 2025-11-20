# CFDE Wheel Browser Build - Final Summary

## Goal
Create a browser-compatible build of cfde-wheel that works with Django CMS via script tags (no npm install).

## The Core Problem
- **cfde-wheel** depends on React, MUI, and Emotion
- MUI and Emotion have internal imports of React
- When bundling for browser, need ALL code to use the same React instance from `window.React`
- If different React instances exist, React hooks fail with "Cannot read properties of null (reading 'useState')"

## Constraints
- Maintainer wants dependencies externalized (not bundled)
- Cannot add new build tool dependencies to cfde-wheel repo
- Must use existing tsup/esbuild tooling

## What We Tried

### 1. ESM Build + Import Maps ❌
**Approach:** Externalize everything, provide via importmap
```typescript
external: ['react', 'react-dom', '@emotion/react', '@emotion/styled', '@mui/material']
```
**Result:** Failed with `Could not resolve "@mui/utils/formatMuiErrorMessage"`
**Why:** MUI has deep internal package dependencies (`@mui/utils`, `@mui/system`, etc.) that would require dozens of importmap entries

### 2. Bundle MUI/Emotion, Externalize React ❌
**Approach:** Bundle dependencies but keep React external
```typescript
external: ['react', 'react-dom'],
noExternal: [/.*/]
```
**Result:** "Cannot read properties of null (reading 'useState')"
**Why:** Bundled MUI/Emotion code included its own React copy, creating multiple React instances

### 3. IIFE with Alias to window.React ❌
**Approach:** Use esbuild's alias to replace React imports with global references
```typescript
format: ['iife'],
external: ['react', 'react-dom'],
esbuildOptions(options) {
  options.alias = {
    'react': '__REACT_GLOBAL__',
    'react-dom': '__REACTDOM_GLOBAL__'
  };
}
```
**Result:** Build error: `Could not resolve "__REACT_GLOBAL__/jsx-runtime"`
**Why:** esbuild's `alias` treats replacements as file paths, not runtime variables. Can't handle subpath imports like `react/jsx-runtime`

## Root Cause
**tsup/esbuild cannot:**
- Bundle MUI/Emotion (which contain React imports)
- While making those internal React imports use `window.React` instead of bundling React

This requires transform plugins that esbuild doesn't support.

## The Solution: Wrapper Repository

Create a separate `cfde-wheel-browser` repository that:

1. **Imports** `cfde-wheel` as a dependency
2. **Uses Rollup** (with proper plugins) to build UMD bundle
3. **Publishes** only the browser-ready `dist/cfde-wheel.umd.js`

### Why This Works
- cfde-wheel stays focused on npm/Node.js users
- Separate repo can use whatever build tools needed (Rollup with advanced plugins)
- Clear separation of concerns: source package vs. browser build
- When cfde-wheel updates, rebuild and republish browser package

### Architecture
```
cfde-wheel (maintainer's repo)
  ├─ ESM/CJS builds for npm ✅
  └─ Dependencies externalized ✅

cfde-wheel-browser (your repo)  
  ├─ package.json: depends on cfde-wheel
  ├─ rollup.config.js: builds UMD with proper React global handling
  ├─ dist/cfde-wheel.umd.js (the actual deliverable)
  └─ README: browser usage instructions
```

### Precedent
React 19 removed UMD builds from the main package. The community created `umd-react` as a separate package to provide UMD builds. This validates the pattern of separate packages for different distribution formats when the main package doesn't support it.

## Next Steps
1. Create `cfde-wheel-browser` repository
2. Set up Rollup config with plugins that can properly externalize React to globals
3. Build and test UMD bundle
4. Document browser usage in cfde-wheel-browser README
5. Link to browser build from main cfde-wheel repo