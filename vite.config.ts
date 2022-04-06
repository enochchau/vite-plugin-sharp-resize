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
        type: "jpg",
        options: {
          quality: 1,
        },
      },
    }),
  ],
  build: {
    outDir: "dist_test",
  },
});
