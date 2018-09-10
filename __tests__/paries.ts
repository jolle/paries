import { generateTestingPage } from './helpers/generateTestingPage';
import { createAndGetCanvas } from './utils/createAndGetCanvas';

declare const page: any;
declare const paries: any;
declare const line: any;
declare const layer: any;
declare const rect: any;

describe('paries', () => {
    beforeAll(async () => {
        await page.goto(
            `data:text/html;base64,${Buffer.from(
                await generateTestingPage()
            ).toString('base64')}`
        );
    });

    it('creates a 100x100 canvas', async () => {
        const img = await createAndGetCanvas(() =>
            paries({ width: 100, height: 100 })
        );
        expect(img.bitmap.height).toBe(100);
        expect(img.bitmap.width).toBe(100);
    });
});
