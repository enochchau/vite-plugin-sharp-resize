// aspect ratio helpers
import { AspectRatio, AspectRatioStr } from "./types";

/**
 * parse aspect ratio string
 * @param aspectRatio
 * @returns aspect ratio object
 */
function parseAspectRatio(aspectRatio: AspectRatioStr): AspectRatio {
  const [arW, arH] = aspectRatio.split(":");
  const w = parseInt(arW);
  const h = parseInt(arH);
  return { w, h };
}

/**
 * @param height input height
 * @param aspectRatio input aspect ratio
 * @returns computed width
 */
export function getAspectWidth(
  height: number,
  aspectRatio: AspectRatioStr
): number {
  const { w, h } = parseAspectRatio(aspectRatio);
  return Math.round(height * (w / h));
}

/**
 * @param width input width
 * @param aspectRatio input aspect ratio
 * @returns computed height
 */
export function getAspectHeight(
  width: number,
  aspectRatio: AspectRatioStr
): number {
  const { w, h } = parseAspectRatio(aspectRatio);
  return Math.round(width * (h / w));
}
