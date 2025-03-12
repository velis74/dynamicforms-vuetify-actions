/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import dts from 'vite-plugin-dts';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    vue(),
    {
      ...eslint({
        failOnWarning: false,
        failOnError: false,
      }),
      apply: 'serve',
      enforce: 'post',
    },
    dts({
      tsconfigPath: './tsconfig.build.json',
      rollupTypes: true
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, '../../node_modules'),
    },
    extensions: [
      '.js',
      '.mjs',
      '.ts',
    ],
  },
  build: {
    target: 'es2015',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['umd', 'es'],
      fileName: 'dynamicforms-vuetify-actions',
      name: 'dynamicforms-vuetify-actions.[name]',
    },
    rollupOptions: {
      external: [
        'lodash-es',
        'vue',
        '@dynamicforms/vue-forms'
      ],
      output: {
        globals: (id: string) => id, // all external modules are currently not aliased to anything but their own names
      }
    }
  },
  test: {
    server: {
      deps: {
        // inline: ['vuetify']
      },
    },
    globals: true,
    environment: 'jsdom',
  },
});
