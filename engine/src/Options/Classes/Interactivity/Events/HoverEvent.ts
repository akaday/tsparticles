import type { HoverMode } from "../../../../Enums/Modes/HoverMode.js";
import type { IHoverEvent } from "../../../Interfaces/Interactivity/Events/IHoverEvent.js";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader.js";
import { Parallax } from "./Parallax.js";
import type { RecursivePartial } from "../../../../Types/RecursivePartial.js";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple.js";

/**
 * [[include:Options/Interactivity/Hover.md]]
 */
export class HoverEvent implements IHoverEvent, IOptionLoader<IHoverEvent> {
    enable;
    mode: SingleOrMultiple<HoverMode | keyof typeof HoverMode | string>;
    readonly parallax;

    constructor() {
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax();
    }

    load(data?: RecursivePartial<IHoverEvent>): void {
        if (!data) {
            return;
        }

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }

        if (data.mode !== undefined) {
            this.mode = data.mode;
        }

        this.parallax.load(data.parallax);
    }
}
