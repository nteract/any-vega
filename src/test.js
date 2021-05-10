// noinspection JSConstantReassignment
global.window = undefined;
// noinspection JSConstantReassignment
global.self = undefined;

const anyVega = require("../packages/any-vega");

anyVega.embed({kind: "vega-lite", version: "5"}).then(console.log);
