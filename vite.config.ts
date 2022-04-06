import { defineConfig } from "vite";

import { pluginSharp } from "./dist/index";

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
