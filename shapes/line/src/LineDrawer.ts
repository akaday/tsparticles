import type { IShapeDrawData, IShapeDrawer } from "@tsparticles/engine";
import { drawLine } from "./Utils.js";

const sides = 1;

/**
 */
export class LineDrawer implements IShapeDrawer {
    draw(data: IShapeDrawData): void {
        drawLine(data);
    }

    getSidesCount(): number {
        return sides;
    }
}
