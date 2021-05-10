export declare type VegaKind = "vega" | "vega-lite";
export declare type VegaVersion = "2" | "3" | "4" | "5";
export declare type VegaLiteVersion = "1" | "2" | "3" | "4" | "5";
export declare type Version = {
    kind: "vega";
    version: VegaVersion;
} | {
    kind: "vega-lite";
    version: VegaLiteVersion;
};
export declare const embed: ({ kind, version }: Version) => Promise<((anchor: any, spec: any, options: any) => any) | typeof import("vega-embed-v5").default | typeof import("vega-embed-v6").default | undefined>;
