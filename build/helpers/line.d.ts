import { stroke } from './../common/stroke';
import { EntityInterface } from './../Entity';
import { Entity } from '../Entity';
export interface LineProps {
    sX: number;
    sY: number;
    dX: number;
    dY: number;
    stroke: stroke;
}
export declare class Line extends Entity implements EntityInterface {
    props: LineProps;
    constructor(props: LineProps);
    draw(ctx: CanvasRenderingContext2D): void;
}
export declare const line: (props: LineProps) => Line;
