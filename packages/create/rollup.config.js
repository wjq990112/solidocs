import { builtinModules } from 'module';
import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

/** @type {import('rollup').RollupOptions['output']} */
const baseOutputOpts = {
  banner: '#! /usr/bin/env node',
};
/** @type {import('rollup').RollupOptions['output']} */
const outputOpts = [
  {
    file: 'dist/index.cjs',
    format: 'cjs',
  },
  {
    file: 'dist/index.mjs',
    format: 'esm',
  },
];

export default defineConfig({
  external: builtinModules,
  input: 'src/index.ts',
  output: outputOpts.map((opts) => ({ ...baseOutputOpts, ...opts })),
  plugins: [nodeResolve(), commonjs(), typescript({ tsconfig: '../../tsconfig.json' })],
});
