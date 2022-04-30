import {defineConfig} from 'vitest/config';
import {cwd} from '@micra/vite-config/utilities/cwd';
import pkg from './package.json';

export default defineConfig({
  build: {
    outDir: cwd('.micra'),
    lib: {
      entry: cwd('src/entry.ts'),
      formats: ['cjs'],
      fileName: () => '[name].js',
    },
    rollupOptions: {
      external: Object.keys(pkg.dependencies),
      output: {
        assetFileNames: '[name].[ext]',
        preserveModules: true,
      },
    },
  },

  plugins: [],

  resolve: {
    alias: {
      '@': cwd('src'),
    },
  },

  test: {
    globals: true,
    coverage: {
      excludeNodeModules: true,
      reporter: ['json-summary'],
      reportsDirectory: 'coverage',
      exclude: ['.*.*'],
    },
  },
});
