# Agent Guidelines

## Commands
- **Dev**: `npm run dev` (uses Turbopack)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Tests**: No test framework configured

## Code Style
- **TypeScript**: Strict mode enabled (`strict: true`)
- **Imports**: Use `@/` path alias for `./src/*` imports
- **Framework**: Next.js 15 App Router with React 19
- **UI Libraries**: Material-UI (@mui/material) + Tailwind CSS v4
- **Types**: Always use explicit types, leverage `Readonly<>` for props
- **Naming**: PascalCase for components, camelCase for variables/functions
- **React**: Use functional components with hooks
- **Formatting**: Follow Next.js conventions (2-space indent, semicolons, double quotes)
- **Error Handling**: Use TypeScript's type system, avoid `any` types

## Before Committing
- Run `npm run lint` to check for linting errors
- Run `npm run build` to verify TypeScript compilation
- Ensure all imports use `@/` alias where applicable
