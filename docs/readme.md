# DynamicForms Vuetify Actions Documentation

This directory contains the VitePress documentation for `@dynamicforms/vuetify-actions`.

## Development

To start the documentation site in development mode:

```bash
# From the root directory
npm run docs:dev

# Or from the docs directory
npm run docs:dev
```

The site will be available at http://localhost:5173/

## Structure

- `.vitepress/` - VitePress configuration and custom components
  - `theme/` - Custom theme configuration
  - `config.ts` - VitePress configuration
- `guide/` - User guide documentation
- `api/` - API reference documentation
- `examples/` - Component examples
- `components/` - Vue components used in the documentation

## Building

To build the documentation site for production:

```bash
# From the root directory
npm run docs:build
```

The built site will be in the `docs/.vitepress/dist` directory.

## Live Components

The documentation includes live demos of the library components. To add a new demo:

1. Create a Vue component in the `components/` directory
2. Import and use the component in your markdown page
