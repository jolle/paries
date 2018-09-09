import * as pariesProps from '../../src';

for (let propName in pariesProps) {
    (window as any)[propName] = (pariesProps as any)[propName];
}
