import { generateTestingPage } from './helpers/generateTestingPage';
import { createAndGetCanvas } from './utils/createAndGetCanvas';

describe('paries', () => {
  beforeAll(async () => {
    await page.goto('about:blank');
    await page.setContent(await generateTestingPage());
  });

  it('creates a 100x100 canvas', async () => {
    const img = await createAndGetCanvas(`
      paries({ width: 100, height: 100 })
    `);
    expect(img.bitmap.height).toBe(100);
    expect(img.bitmap.width).toBe(100);
  });
});
