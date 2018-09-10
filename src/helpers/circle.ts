import { fill } from './../common/fill';
import { stroke } from './../common/stroke';
import { EntityInterface } from './../Entity';
import { Entity } from '../Entity';

export interface CircleProps {
    x: number;
    y: number;
    radius: number;
    stroke?: stroke;
    fill?: fill;
}

export class Circle extends Entity implements EntityInterface {
    props: CircleProps;

    constructor(props: CircleProps) {
        super();

        this.props = props;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(
            this.props.x,
            this.props.y,
            this.props.radius,
            0,
            2 * Math.PI,
            false
        );
        ctx.closePath();

        if (this.props.fill) {
            ctx.fillStyle = this.props.fill.fillColor;
            ctx.fill();
        }

        if (this.props.stroke) {
            ctx.lineWidth = this.props.stroke.strokeWidth;
            ctx.strokeStyle = this.props.stroke.strokeColor;
            ctx.stroke();
        }
    }
}

export const circle = (props: CircleProps) => new Circle(props);
