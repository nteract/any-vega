import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import pkg from "./package.json";

export default [
  {
    input: "index.js",
    external: [
      "datalib",
      "datalib/src/util",
      "datalib/src/import/load",
      "d3",
      "d3-cloud",
      "d3-request",
      "d3-scale-chromatic",
      "json-stable-stringify"
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins: [
      resolve({
        only: [/^vega.*$/]
      }),
      json(),
      commonjs({
        sourceMap: false,
        ignore: ["canvas"]
      }),
      cleanup({ comments: "none" })
    ]
  }
];
