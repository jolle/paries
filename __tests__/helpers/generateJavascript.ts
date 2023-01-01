import { join } from 'path';
import { build } from 'esbuild';

let result: Promise<string>;

export const generateJavascript = () => {
  if (result) {
    return result;
  }

  result = (async () => {
    const bundle = await build({
      entryPoints: [join(__dirname, 'testingPariesPage.ts')],
      bundle: true,
      write: false,
    });
    return new TextDecoder().decode(bundle.outputFiles[0].contents);
  })();

  return result;
};
