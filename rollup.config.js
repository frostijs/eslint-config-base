import { eslint } from 'rollup-plugin-eslint';
import minify from 'rollup-plugin-babel-minify';

const plugins = [eslint(), minify()];

export default [
  {
    input: 'src/eslint.js',
    output: [
      {
        file: 'dist/eslint-config-base.esm.js',
        format: 'esm'
      },
      {
        file: 'dist/eslint-config-base.cjs.js',
        format: 'cjs'
      }
    ],
    plugins
  }
];
