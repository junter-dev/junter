const rollup = require("rollup");
const config = require('./bundleConfig')
const watcher = rollup.watch(config.default);
const fs = require('fs');

watcher.on('event', (event) => {
    if (event.code === 'BUNDLE_END') {
        event.output.forEach((output) => {
            fs.writeFile(output.replace('index.js', 'index.d.ts'), "export * from './types'", { encoding: 'utf-8' }, (err) => {
                if (!err) process.exit(0)

                console.error(err)
                process.exit(1)
            });
        })
    }
});