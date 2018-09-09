import { join } from 'path';
import { readFileSync } from 'fs';
const Bundler = require('parcel-bundler');

export const generateJavascript = async () => {
    const bundler = new Bundler(join(__dirname, 'testingPariesPage.ts'), {
        outDir: '/tmp',
        cache: false,
        logLevel: 0,
        watch: false,
        sourceMaps: false,
        minify: true
    });
    const bundle = await bundler.bundle();
    return readFileSync(bundle.name)
        .toString()
        .replace(/\n/g, ' '); // TODO: does parcel give this in `bundle`?
};
