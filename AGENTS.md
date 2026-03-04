# AGENTS.md

## Cursor Cloud specific instructions

This is `cfde-wheel`, a standalone React component (npm package) that renders the CFDE Navigation Wheel. There is no backend, database, or Docker infrastructure.

### Key commands

See `package.json` scripts for the full list. In brief:

- **Lint:** `npm run lint` (runs `tsc`)
- **Build:** `npm run build` (fetches latest DCC data then bundles with `tsup`)
- **Dev/preview:** `npm run storybook` (Storybook on port 6006)

### Notes

- Some DCC icon images are loaded from `cfde-drc.s3.us-east-2.amazonaws.com` at runtime. If network access is restricted, the wheel still renders but some icons appear as empty circles. This is expected.
- The `build:dccs` step fetches DCC metadata from S3. If this fails, `src/dccs.json` already contains a bundled fallback so the build still succeeds.
- Storybook 9 is used; the story lives at `src/stories/Wheel.stories.ts`.
