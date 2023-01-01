import { fill } from './../common/fill';
import { stroke } from './../common/stroke';
import { EntityInterface } from './../Entity';
import { Entity } from '../Entity';

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
  fill?: fill;
  stroke?: stroke;
}

export class Rectangle
  extends Entity<RectangleProps>
  implements EntityInterface<RectangleProps>
{
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

export const rect = (props: RectangleProps) => new Rectangle(props);
