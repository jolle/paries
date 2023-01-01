import { getParentCanvas } from './../index';
import { EntityInterface } from './../Entity';
import { Entity } from '../Entity';

type Layers = (Entity<unknown> & EntityInterface<unknown>)[];

export class Layer extends Entity<Layers> implements EntityInterface<Layers> {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  initiatedCanvas: boolean;

  constructor(props: Layers) {
    super(props);

    this.canvas = document.createElement('canvas');
    this.initiatedCanvas = false;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw Error('Unable to get layer canvas context');
    this.ctx = ctx;

    if (this.ctx !== null) {
      this.props.forEach((child) => {
        if (child instanceof Entity) {
          child.subscribe(() => {
            this.drawAll(this.ctx);
            this.updated();
          });
        }
      });
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.initiatedCanvas) {
      this.initiatedCanvas = true;
      this.canvas.width = getParentCanvas().width;
      this.canvas.height = getParentCanvas().height;
      this.drawAll(this.ctx);
    }
    ctx.drawImage(this.canvas, 0, 0);
  }

  drawAll(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.props.forEach((child) => {
      child.draw(ctx);
    });
  }
}

export const layer = (...children: Layers) => new Layer(children);
