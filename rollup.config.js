import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import progress from "rollup-plugin-progress";
import visualizer from "rollup-plugin-visualizer";

export default
    ["vg2vl1", "vg3vl1", "vg4vl2", "vg5vl3", "vg5vl4"].map(
        each => (
            {
                input: `packages/${each}/index.js`,
                output: [
                    {file: `packages/any-vega/${each}.js`, format: "cjs"},
                ],
                context: "null",
                external: [
                    "datalib",
                    "datalib/src/util",
                    "datalib/src/import/load",
                    "d3",
                    "d3-cloud",
                    "d3-force",
                    "d3-geo-projection",
                    "d3-request",
                    "d3-scale-chromatic",
                    "json-stable-stringify",
                ],
                plugins: [
                    progress(),
                    resolve(),
                    json(),
                    commonjs({
                        sourceMap: false,
                        ignore: ["canvas"],
                    }),
                    cleanup({comments: "none"}),
                    visualizer({filename: `packages/any-vega/${each}.html`}),
                ],
            }
        )
    );
