const path = require("path");
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const IGNORED = ["canvas"];
const LEAVE_REQUIRE_AS_IS = IGNORED.reduce((acc, p) => (acc[p] = `commonjs ${p}`, acc), {});

module.exports = {
    entry: {
        vg2vl1: "./packages/vg2vl1/index.js",
        vg3vl1: "./packages/vg3vl1/index.js",
        vg4vl2: "./packages/vg4vl2/index.js",
        vg5vl3: "./packages/vg5vl3/index.js",
        vg5vl4: "./packages/vg5vl4/index.js",
        vg5vl5: "./packages/vg5vl5/index.js",
    },
    mode: "none",
    output: {
        path: path.resolve(__dirname, "packages/any-vega"),
        filename: "[name].js",
        libraryTarget: 'umd',
    },
    externals: LEAVE_REQUIRE_AS_IS,
    plugins: [
        //new BundleAnalyzerPlugin(),
    ],
    resolve: {
        plugins: [
            PnpWebpackPlugin,
        ],
    },
    resolveLoader: {
        plugins: [
            PnpWebpackPlugin.moduleLoader(module),
        ],
    },
};
