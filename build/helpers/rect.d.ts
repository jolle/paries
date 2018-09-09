import { fill } from './../common/fill';
import { stroke } from './../common/stroke';
import { EntityInterface } from './../Entity';
import { Entity } from '../Entity';
export interface rectOpts {
    fill?: fill;
    stroke?: stroke;
}
export interface rectWithDimensions {
    width: number;
    height: number;
}
export interface rectWithDestination {
    dX: number;
    dY: number;
}
export interface RectangleProps {
    x: number;
    y: number;
    size: rectWithDestination | rectWithDimensions;
    opts: rectOpts;
}
export declare class Rectangle extends Entity implements EntityInterface {
    props: RectangleProps;
    constructor(props: RectangleProps);
    draw(ctx: CanvasRenderingContext2D): void;
}
export declare const rect: (props: RectangleProps) => Rectangle;
