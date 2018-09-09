export interface EntityInterface {
    draw(ctx: CanvasRenderingContext2D): void;
    update(...args: any[]): void;
}

export class Entity {
    subscribers: Function[];
    props: any;

    constructor() {
        this.subscribers = [];
    }

    subscribe(callback: Function) {
        this.subscribers.push(callback);
    }

    update(props: any) {
        this.props = { ...this.props, ...props };
        this.updated();
    }

    updated() {
        this.subscribers.forEach(subscriber => subscriber());
    }
}
