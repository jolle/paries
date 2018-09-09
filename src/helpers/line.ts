import { stroke } from './../common/stroke';
import { EntityInterface } from './../Entity';
import { Entity } from '../Entity';

interface LineProps {
    sX: number;
    sY: number;
    dX: number;
    dY: number;
    stroke: stroke;
}

class Line extends Entity implements EntityInterface {
    props: LineProps;

    constructor(props: LineProps) {
        super();

        this.props = props;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.props.sX, this.props.sY);
        ctx.lineTo(this.props.dX, this.props.dY);
        ctx.closePath();

        ctx.lineWidth = this.props.stroke.strokeWidth;
        ctx.strokeStyle = this.props.stroke.strokeColor;

        ctx.stroke();
    }
}

export const line = (props: LineProps) => new Line(props);
