import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import progress from 'rollup-plugin-progress';

const options = {
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
    cleanup({ comments: "none" }),
  ],
};

export default [
  Object.assign({
    input: "packages/any-vega/index.js",
    output: [
      { dir: "dist", format: "cjs" },
    ],
  }, options),
];
