import * as v5 from "vega-embed-v5";
import * as v6 from "vega-embed-v6";

type EmbedV5 = (el: HTMLElement | string, spec: v5.VisualizationSpec, opt?: v5.EmbedOptions) => Promise<v5.Result>;
type EmbedV6 = (el: HTMLElement | string, spec: v6.VisualizationSpec, opt?: v6.EmbedOptions) => Promise<v6.Result>;

interface VegaEmbeds {
    v3: EmbedV5;
    v4: EmbedV5;
    v5: EmbedV6;
}

export const vega: VegaEmbeds = {
    v3: (el, spec, opt) => import("vg3vl2").then((({embed}) => embed(el, spec, opt))),
    v4: (el, spec, opt) => import("vg4vl2").then((({embed}) => embed(el, spec, opt))),
    v5: (el, spec, opt) => import("vg5vl4").then((({embed}) => embed(el, spec, opt))),
};

interface VegaLiteEmbeds {
    v2: EmbedV5;
    v3: EmbedV5;
    v4: EmbedV6;
}

export const vegaLite: VegaLiteEmbeds = {
    v2: (el, spec, opt) => import("vg3vl2").then((({embed}) => embed(el, spec, opt))),
    v3: (el, spec, opt) => import("vg5vl3").then((({embed}) => embed(el, spec, opt))),
    v4: (el, spec, opt) => import("vg5vl4").then((({embed}) => embed(el, spec, opt))),
};
