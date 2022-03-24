import {
  AvifOptions,
  GifOptions,
  HeifOptions,
  JpegOptions,
  PngOptions,
  TiffOptions,
  WebpOptions,
} from "sharp";

export type AspectRatioStr = `${number}${":" | "/"}${number}`;
export type AspectRatio = { w: number; h: number };

export type OutputFiletype =
  | {
      type: "webp";
      options?: WebpOptions;
    }
  | {
      type: "jpeg" | "jpg";
      options?: JpegOptions;
    }
  | {
      type: "avif";
      options?: AvifOptions;
    }
  | {
      type: "heif";
      options?: HeifOptions;
    }
  | {
      type: "gif";
      options?: GifOptions;
    }
  | {
      type: "tiff";
      options?: TiffOptions;
    }
  | {
      type: "png";
      options?: PngOptions;
    };
