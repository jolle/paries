import { Entity, EntityInterface } from './Entity';

export interface pariesOpts {
    width: number;
    height: number;
}

export const paries = (
    opts: pariesOpts,
    ...children: (Entity & EntityInterface)[]
) => {
    const canvas = document.createElement('canvas');
    canvas.width = opts.width;
    canvas.height = opts.height;
    const ctx = canvas.getContext('2d');

    if (!ctx) return canvas;

    const redraw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        children.forEach(child => {
            child.draw(ctx);
        });
    };

    children.forEach(child => {
        child.draw(ctx);

        child.subscribe(() => {
            redraw();
        });
    });

    return canvas;
};
