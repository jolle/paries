export interface EntityInterface<T> {
  draw(ctx: CanvasRenderingContext2D): void;
  update(props: T): void;
}

export class Entity<T> {
  subscribers: (() => void)[];
  props: T;

  constructor(initialProps: T) {
    this.props = initialProps;
    this.subscribers = [];
  }

  subscribe(callback: () => void) {
    this.subscribers.push(callback);
  }

  update(props: T) {
    this.props = { ...this.props, ...props };
    this.updated();
  }

  updated() {
    this.subscribers.forEach((subscriber) => subscriber());
  }
}
