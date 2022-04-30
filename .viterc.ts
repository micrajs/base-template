import {defineConfig} from 'vitest/config';
import {cwd} from '@micra/vite-config/utilities/cwd';

export default defineConfig({
  build: {
    outDir: cwd('.micra'),
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
