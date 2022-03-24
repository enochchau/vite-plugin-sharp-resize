import { FilterPattern } from "@rollup/pluginutils";
import {
  AvifOptions,
  GifOptions,
  HeifOptions,
  JpegOptions,
  PngOptions,
  ResizeOptions,
  TiffOptions,
  WebpOptions,
} from "sharp";

export type AspectRatioStr = `${number}:${number}`;
export type AspectRatio = { w: number; h: number };

/**
 * output file type and options
 */
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

/**
 * plugin options
 */
export interface Options {
  include?: FilterPattern;
  exclude?: FilterPattern;
  resize: ResizeOptions;
  withMetadata?: boolean;
  outputFileType?: OutputFiletype;
}
