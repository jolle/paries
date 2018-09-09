# <img src="./.github/logo.png" width="300" height="100" alt="pariēs">

```ts
import { paries, layer, rect } from 'paries';

const canvas = paries(
    {
        width: 100,
        height: 50
    },
    layer(
        rect({
            x: 10,
            y: 20,
            size: {
                width: 10,
                height: 10
            }
        })
    ),
    rect({
        x: 50,
        y: 20,
        size: {
            dX: 65,
            dY: 24
        }
    })
);

document.body.appendChild(canvas);
```
