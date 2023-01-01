import jimp from 'jimp';

const getCanvasImage = async (id: string) => {
  const canvasContent = await page.$eval(`#${id}`, (canvas) =>
    (canvas as HTMLCanvasElement).toDataURL('image/png'),
  );

  return await jimp.read(Buffer.from(canvasContent.split(',')[1], 'base64'));
};

export const createAndGetCanvas = async (fn: string) => {
  const res = await page.evaluate(
    `window.runWithParies(${JSON.stringify(fn)})`,
  );

  if (typeof res !== 'string') {
    throw Error('runWithParies is of unexpected type');
  }

  return getCanvasImage(res);
};
