import { MatrixRain as MR } from "./MatrixRain.js";

export interface MatrixRainOptions {
  characters?: string;
  fontSize?: number;
  fontColor?: string;
  fadeColor?: string;
  fps?: number;
}

export class MatrixRain extends MR {
  constructor(canvas: HTMLCanvasElement, options?: MatrixRainOptions) {
    // deno-lint-ignore no-explicit-any
    super(canvas, options as any);
  }
}
