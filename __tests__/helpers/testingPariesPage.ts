import * as pariesProps from '../../src';

for (let propName in pariesProps) {
    (window as any)[propName] = (pariesProps as any)[propName];
}

const originalParies = (window as any).paries;

(window as any).paries = function() {
    const result = originalParies.apply(this, arguments);
    result.id = `P${Math.random()
        .toString(36)
        .substr(2)}`;
    document.body.appendChild(result);
    return result.id;
};
