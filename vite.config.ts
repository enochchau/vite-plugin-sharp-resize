import { defineConfig } from "vite";

import { pluginSharp } from "./src";

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
