import type { IPolygonMaskDrawStroke } from "../Interfaces/IPolygonMaskDrawStroke";
import type { RecursivePartial } from "tsparticles-engine";
import { OptionsColor } from "tsparticles-engine/Options/Classes/OptionsColor";
import { stringToAlpha } from "tsparticles-engine";
import type { IOptionLoader } from "tsparticles-engine/Options/Interfaces/IOptionLoader";

/**
 * @category Polygon Mask Plugin
 */
export class PolygonMaskDrawStroke implements IPolygonMaskDrawStroke, IOptionLoader<IPolygonMaskDrawStroke> {
    color;
    width;
    opacity;

    constructor() {
        this.color = new OptionsColor();
        this.width = 0.5;
        this.opacity = 1;
    }

    load(data?: RecursivePartial<IPolygonMaskDrawStroke>): void {
        if (!data) {
            return;
        }

        this.color = OptionsColor.create(this.color, data.color);

        if (typeof this.color.value === "string") {
            this.opacity = stringToAlpha(this.color.value) ?? this.opacity;
        }

        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }

        if (data.width !== undefined) {
            this.width = data.width;
        }
    }
}
