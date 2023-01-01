import { createAndGetCanvas } from './utils/createAndGetCanvas';
import { generateTestingPage } from './helpers/generateTestingPage';

describe('line', () => {
  beforeAll(async () => {
    await page.goto('about:blank');
    await page.setContent(await generateTestingPage());
  });

  it('creates a green line', async () => {
    const img = await createAndGetCanvas(`
      paries(
        {
          width: 100,
          height: 50,
        },
        line({
          sX: 0,
          sY: 0,
          dX: 100,
          dY: 0,
          stroke: {
            strokeColor: '#00ff00',
            strokeWidth: 1,
          },
        }),
      )
    `);

    img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
      const [red, green, blue] = Array.from(
        this.bitmap.data.slice(idx, idx + 3),
      );

      const isInside = y === 0;

      expect(red).toBe(isInside ? 0x00 : 0x00);
      expect(green).toBe(isInside ? 0xff : 0x00);
      expect(blue).toBe(isInside ? 0x00 : 0x00);
    });
  });
});
