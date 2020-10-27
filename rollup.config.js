import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import { eslint } from "rollup-plugin-eslint";
import { terser } from "rollup-plugin-terser";

module.exports = {
    input: './src/index.ts',
    output: [
        {
            dir: './dist',
            format: 'es',
            sourcemap: false,
        },
    ],

    plugins: [
        postcss({
            // This is very important cause we cant extract css and use this
            // component in other components without solved css duplicate problem
            extract: true,
            minimize: true,
            autoModules: false,
            modules: {
                localsConvention: 'camelCase',
                localIdentName: '[local]--[hash:base64:2]',
            },
            use: ['sass'],
        }),
        //eslint({ throwOnWarning: false }),
        typescript(),
        terser()
    ],

    external: [
        'react',
        'classnames',
    ],
};
