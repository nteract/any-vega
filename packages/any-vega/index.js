"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.embed = void 0;
const util_1 = require("util");
const embed = async ({ kind, version }) => {
    switch (kind) {
        case "vega":
            switch (version) {
                case "2": return await Promise.resolve().then(() => __importStar(require("./vg2vl1"))).then(({ embed }) => (anchor, spec, options) => util_1.promisify(embed)(anchor, Object.assign(Object.assign({}, options), { spec: spec })));
                case "3": return await Promise.resolve().then(() => __importStar(require("./vg3vl1"))).then(({ embed }) => embed);
                case "4": return await Promise.resolve().then(() => __importStar(require("./vg4vl2"))).then(({ embed }) => embed);
                case "5": return await Promise.resolve().then(() => __importStar(require("./vg5vl4"))).then(({ embed }) => embed);
            }
            break;
        case "vega-lite":
            switch (version) {
                case "1": return await Promise.resolve().then(() => __importStar(require("./vg2vl1"))).then(({ embed }) => (anchor, spec, options) => util_1.promisify(embed)(anchor, Object.assign(Object.assign({}, options), { spec: spec })));
                case "2": return await Promise.resolve().then(() => __importStar(require("./vg4vl2"))).then(({ embed }) => embed);
                case "3": return await Promise.resolve().then(() => __importStar(require("./vg5vl3"))).then(({ embed }) => embed);
                case "4": return await Promise.resolve().then(() => __importStar(require("./vg5vl4"))).then(({ embed }) => embed);
                case "5": return await Promise.resolve().then(() => __importStar(require("./vg5vl5"))).then(({ embed }) => embed);
            }
            break;
    }
};
exports.embed = embed;
