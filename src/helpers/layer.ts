import { EntityInterface } from './../Entity';
import { Entity } from '../Entity';

class Layer extends Entity implements EntityInterface {
    props: (Entity & EntityInterface)[];

    canvas: HTMLCanvasElement;

    constructor(props: (Entity & EntityInterface)[]) {
        super();

        this.props = props;

        this.canvas = document.createElement('canvas');
        const ctx = this.canvas.getContext('2d');

        if (ctx !== null) {
            this.props.forEach(child => {
                if (child instanceof Entity) {
                    child.subscribe(() => {
                        this.drawAll(ctx);
                        this.updated();
                    });
                }
            });
            this.drawAll(ctx);
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.canvas, 0, 0);
    }

    drawAll(ctx: CanvasRenderingContext2D) {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.props.forEach(child => {
            child.draw(ctx);
        });
    }
}

export const layer = (...children: (Entity & EntityInterface)[]) =>
    new Layer(children);
