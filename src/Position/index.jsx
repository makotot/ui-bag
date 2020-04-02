"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = __importDefault(require("@emotion/styled"));
var styled_system_1 = require("styled-system");
// @ts-ignore props is not typed
var should_forward_prop_1 = require("@styled-system/should-forward-prop");
var css_1 = __importDefault(require("@styled-system/css"));
var shouldForwardProp = should_forward_prop_1.createShouldForwardProp(__spreadArrays(should_forward_prop_1.props, [
    'transform',
]));
exports.Position = styled_1.default('div', {
    shouldForwardProp: shouldForwardProp
})(styled_system_1.position, styled_system_1.height, styled_system_1.minHeight, styled_system_1.maxHeight, styled_system_1.width, styled_system_1.minWidth, styled_system_1.maxWidth, function (_a) {
    var position = _a.position, _b = _a.transform, transform = _b === void 0 ? undefined : _b;
    return css_1.default({
        position: position,
        transform: transform,
    });
});
