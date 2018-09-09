import { generateTestingPage } from './helpers/generateTestingPage';
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

describe('line', () => {
    beforeAll(async () => {
        await page.goto(
            `data:text/html;base64,${Buffer.from(
                await generateTestingPage()
            ).toString('base64')}`
        );
        //await new Promise(resolve => setTimeout(() => resolve(), 1000));
    });

    it('loads the test page', async () => {
        await expect(page).toMatch('paries test');
    });

    it('creates a green line', async () => {
        /*
        line forumula: y = x
        */

        const canvasId = await page.evaluate(() => {
            const canvas = paries(
                {
                    width: 100,
                    height: 50
                },
                line({
                    sX: 0,
                    sY: 0,
                    dX: 100,
                    dY: 0,
                    stroke: {
                        strokeColor: '#00ff00',
                        strokeWidth: 1
                    }
                })
            );
            canvas.id = `P${Math.random()
                .toString(36)
                .substr(2)}`;

            document.body.appendChild(canvas);
            return canvas.id;
        });
        const img = await getCanvasImage(canvasId);

        img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(
            x,
            y,
            idx
        ) {
            const [red, green, blue] = Array.from(
                this.bitmap.data.slice(idx, idx + 3)
            );

            const isInside = y === 0;

            expect(red).toBe(isInside ? 0x00 : 0x00);
            expect(green).toBe(isInside ? 0xff : 0x00);
            expect(blue).toBe(isInside ? 0x00 : 0x00);
        });
    });
});