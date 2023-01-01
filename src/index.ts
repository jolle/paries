import { text } from './helpers/text';
import { circle } from './helpers/circle';
import { rect } from './helpers/rect';
import { layer } from './helpers/layer';
import { line } from './helpers/line';
import { Entity, EntityInterface } from './Entity';

export interface pariesOpts {
  width: number;
  height: number;
}

let parentCanvas: HTMLCanvasElement;
export const getParentCanvas = () => parentCanvas;

export const paries = (
  opts: pariesOpts,
  ...children: (Entity<unknown> & EntityInterface<unknown>)[]
) => {
  const canvas = document.createElement('canvas');
  canvas.width = opts.width;
  canvas.height = opts.height;
  parentCanvas = canvas;
  const ctx = canvas.getContext('2d');

  if (!ctx) return canvas;

  const redraw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    children.forEach((child) => {
      child.draw(ctx);
    });
  };

  children.forEach((child) => {
    child.draw(ctx);

    child.subscribe(() => {
      redraw();
    });
  });

  return canvas;
};

export { line, layer, rect, circle, text };
