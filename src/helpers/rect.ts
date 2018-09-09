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

export class Rectangle extends Entity implements EntityInterface {
    props: RectangleProps;

    constructor(props: RectangleProps) {
        super();

        this.props = props;
    }

    draw(ctx: CanvasRenderingContext2D) {
        let width = (this.props.size as rectWithDimensions).width;
        let height = (this.props.size as rectWithDimensions).height;
        if (Object.keys(this.props.size).includes('dX')) {
            width = (this.props.size as rectWithDestination).dX - this.props.x;
            height = (this.props.size as rectWithDestination).dY - this.props.y;
        }

        ctx.beginPath();
        ctx.rect(this.props.x, this.props.y, width, height);
        ctx.closePath();

        if (this.props.opts.fill) {
            ctx.fillStyle = this.props.opts.fill.fillColor;
            ctx.fill();
        }

        if (this.props.opts.stroke) {
            ctx.lineWidth = this.props.opts.stroke.strokeWidth;
            ctx.strokeStyle = this.props.opts.stroke.strokeColor;
            ctx.stroke();
        }
    }
}

export const rect = (props: RectangleProps) => new Rectangle(props);
