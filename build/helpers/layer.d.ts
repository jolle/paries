import { EntityInterface } from './../Entity';
import { Entity } from '../Entity';
export declare class Layer extends Entity implements EntityInterface {
    props: (Entity & EntityInterface)[];
    canvas: HTMLCanvasElement;
    constructor(props: (Entity & EntityInterface)[]);
    draw(ctx: CanvasRenderingContext2D): void;
    drawAll(ctx: CanvasRenderingContext2D): void;
}
export declare const layer: (...children: (Entity & EntityInterface)[]) => Layer;
