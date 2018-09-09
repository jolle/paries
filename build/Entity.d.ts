export interface EntityInterface {
    draw(ctx: CanvasRenderingContext2D): void;
    update(...args: any[]): void;
}
export declare class Entity {
    subscribers: Function[];
    props: any;
    constructor();
    subscribe(callback: Function): void;
    update(props: any): void;
    updated(): void;
}
