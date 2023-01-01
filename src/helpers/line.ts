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

export class Line
  extends Entity<LineProps>
  implements EntityInterface<LineProps>
{
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
