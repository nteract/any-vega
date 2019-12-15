import { promisify } from "util";

export type VegaKind = "vega" | "vega-lite";
export type VegaVersion = "2" | "3" | "4" | "5";
export type VegaLiteVersion = "1" | "2" | "3" | "4";
export type Version =
    | { kind: "vega"; version: VegaVersion }
    | { kind: "vega-lite"; version: VegaLiteVersion }
    ;

export const embed = async ({kind, version}: Version) => {
    switch (kind) {
        case "vega":
            switch (version) {
                case "2": return await import("./vg2vl1").then(({ embed }) => (anchor: any, spec: any, options: any) => promisify(embed)(anchor, {...options, spec: spec}));
                case "3": return await import("./vg3vl1").then(({ embed }) => embed);
                case "4": return await import("./vg4vl2").then(({ embed }) => embed);
                case "5": return await import("./vg5vl4").then(({ embed }) => embed);
            }
            break;

        case "vega-lite":
            switch (version) {
                case "1": return await import("./vg2vl1").then(({ embed }) => (anchor: any, spec: any, options: any) => promisify(embed)(anchor, {...options, spec: spec}));
                case "2": return await import("./vg4vl2").then(({ embed }) => embed);
                case "3": return await import("./vg5vl3").then(({ embed }) => embed);
                case "4": return await import("./vg5vl4").then(({ embed }) => embed);
            }
            break;
    }
};
