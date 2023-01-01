import { stroke } from './../common/stroke';
import { EntityInterface } from './../Entity';
import { Entity } from '../Entity';
import { fill } from '../common/fill';

export interface TextProps {
  content: string;
  x: number;
  y: number;
  font: string;
  fill?: fill;
  stroke?: stroke;
}

export class Text
  extends Entity<TextProps>
  implements EntityInterface<TextProps>
{
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
