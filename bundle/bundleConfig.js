const typescript = require('@rollup/plugin-typescript');
const replace = require('@rollup/plugin-replace')

const config =  {
    input: 'src/index.ts',
    output: [
        process.env.BUILD === 'browser' ? {
            file: 'build/browser/index.js',
            format: 'iife',
            name: 'Junter',
        } : {
            file: 'build/node/index.js',
            format: 'cjs',
            name: 'Junter',
        }
    ],
    plugins: [typescript({ module: "ESNext" }), process.env.BUILD === 'browser' ?
        replace({ values: {
            'const:import-window': '../dom/clientDOM'
        }}) :
        replace({ values: {
            'const:import-window': '../dom/serverDOM'
        }})]
};

exports.default = config;