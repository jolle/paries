import jimp from 'jimp';

declare const page: any;
declare const paries: any;
declare const line: any;
declare const layer: any;
declare const rect: any;

const getCanvasImage = async (id: string) => {
    const canvasHandle = await page.$(`#${id}`);
    const canvasContent = await page.evaluate(
        (canvas: any) => canvas.toDataURL('image/png'),
        canvasHandle
    );
    await canvasHandle.dispose();
    return await jimp.read(Buffer.from(canvasContent.split(',')[1], 'base64'));
};

export const createAndGetCanvas = async (fn: () => String) =>
    getCanvasImage(await page.evaluate(fn));
