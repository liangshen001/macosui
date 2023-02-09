'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@babel/core');
var babel = require('@rollup/plugin-babel');
var typescript = require('@rollup/plugin-typescript');
var commonjs = require('@rollup/plugin-commonjs');
var external = require('rollup-plugin-peer-deps-external');
var postcss = require('rollup-plugin-postcss');
var resolve = require('@rollup/plugin-node-resolve');
var url = require('@rollup/plugin-url');
var typescriptEngine = require('typescript');
var pkg = require('./package.json');
var json = require('@rollup/plugin-json');

const config = {
    input: './src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: false,
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: false,
        },
    ],
    plugins: [
        postcss({
            plugins: [],
            minimize: true,
        }),
        external({
            includeDependencies: true,
        }),
        typescript({
            tsconfig: './tsconfig.json',
            typescript: typescriptEngine,
            sourceMap: false,
        }),
        commonjs(),
        babel({
            extensions: [...core.DEFAULT_EXTENSIONS, '.ts', 'tsx'],
            babelHelpers: 'bundled',
            exclude: /node_modules/,
        }),
        json(),
        url(),
        // svgr(),
        resolve(),
        // terser(),
    ],
    watch: {
        clearScreen: false,
    },
};

exports.default = config;
