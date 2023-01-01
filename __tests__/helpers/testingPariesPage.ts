import * as pariesProps from '../../src';

declare global {
  interface Window {
    runWithParies: (code: string) => string;
  }
}

window.runWithParies = (code) => {
  const result = new Function(...Object.keys(pariesProps), `return (${code})`)(
    ...Object.values(pariesProps),
  );
  result.id = `P${Math.random().toString(36).substr(2)}`;
  document.body.appendChild(result);
  return result.id;
};
