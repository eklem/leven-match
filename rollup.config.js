// Something like this:

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import pkg from './package.json'

export default [
  // browser-friendly UMD build
  {
    input: './src/index.js',
    output: [
      { name: 'lvm', file: pkg.browser, format: 'umd' },
      { file: pkg.main, format: 'cjs', exports: 'auto' },
      { file: pkg.module, format: 'esm', exports: 'auto' }
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      json()
    ]
  }
]
