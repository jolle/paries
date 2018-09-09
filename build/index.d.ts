import { rect } from './helpers/rect';
import { layer } from './helpers/layer';
import { line } from './helpers/line';
import { Entity, EntityInterface } from './Entity';
export interface pariesOpts {
    width: number;
    height: number;
}
export declare const paries: (opts: pariesOpts, ...children: (Entity & EntityInterface)[]) => HTMLCanvasElement;
export { line, layer, rect };
