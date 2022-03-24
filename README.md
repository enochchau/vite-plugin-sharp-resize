# Vite Plugin Sharp Resize

Resize images with [Vite](https://vitejs.dev/) and
[Sharp](https://sharp.pixelplumbing.com/).

## Usage

```js
import { defineConfig } from "vite";

import { pluginSharp } from "vite-plugin-sharp-resize";

export default defineConfig({
  plugins: [
    pluginSharp({
      resize: {
        width: 200,
        height: 200,
      },
      outputFileType: {
        type: "webp",
      },
    }),
  ],
  build: {
    outDir: "dist_test",
  },
});
```

### Supported Option

```typescript
interface Options {
  // Array of strings or RegExp to include
  // if omitted, all paths are included
  include?: FilterPattern;
  // Array of strings of RegExp to exclude
  // if omitted, no paths are exlucded
  exclude?: FilterPattern;
  // sharp resize options
  resize: ResizeOptions;
  // should the resized image contain its original meta-data
  withMetadata?: boolean;
  // output file type, supports all sharp output file types
  outputFileType?: OutputFiletype;
}
```

- [sharp output options](https://sharp.pixelplumbing.com/api-output)
- [sharp resize options](https://sharp.pixelplumbing.com/api-resize)

## Aspect Ratio Helpers

This plugin comes with some aspect ratio convenience functions.

**`getAspectWidth`**

Compute width based on a given aspect ratio.

```js
const height = 300; // px
const width = getAspectWidth(height, "4:3");
// width = 400
```

**`getAspectHeight`**

Compute height based on a given aspect ratio.

```js
const width = 400; // px
const height = getAspectWidth(width, "4:3");
// height = 300
```
