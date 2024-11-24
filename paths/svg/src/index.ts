import { type Engine, assertValidVersion } from "@tsparticles/engine";
import { SVGPathGenerator } from "./SVGPathGenerator.js";

declare const __VERSION__: string;

export const svgPathName = "svgPathGenerator";

/**
 * @param engine -
 * @param refresh -
 */
export async function loadSVGPath(engine: Engine, refresh = true): Promise<void> {
    assertValidVersion(engine, __VERSION__);

    await engine.addPathGenerator(svgPathName, new SVGPathGenerator(), refresh);
}
