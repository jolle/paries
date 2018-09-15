import { fill } from './../../build/common/fill.d';
import { stroke } from './../common/stroke';
import { EntityInterface } from './../Entity';
import { Entity } from '../Entity';

export interface TextProps {
    content: string;
    x: number;
    y: number;
    font: string;
    fill?: fill;
    stroke?: stroke;
}

export class Text extends Entity implements EntityInterface {
    props: TextProps;

    constructor(props: TextProps) {
        super();

        this.props = props;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.font = this.props.font;

        if (this.props.fill) {
            ctx.fillStyle = this.props.fill.fillColor;
            ctx.fillText(this.props.content, this.props.x, this.props.y);
        }

        if (this.props.stroke) {
            ctx.lineWidth = this.props.stroke.strokeWidth;
            ctx.strokeStyle = this.props.stroke.strokeColor;
            ctx.strokeText(this.props.content, this.props.x, this.props.y);
        }
    }
}

export const text = (props: TextProps) => new Text(props);
