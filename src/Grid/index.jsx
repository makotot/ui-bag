"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = __importDefault(require("@emotion/styled"));
var should_forward_prop_1 = __importDefault(require("@styled-system/should-forward-prop"));
var styled_system_1 = require("styled-system");
var css_1 = __importDefault(require("@styled-system/css"));
exports.Grid = styled_1.default('div', {
    shouldForwardProp: should_forward_prop_1.default
})(styled_system_1.grid, styled_system_1.space, styled_system_1.layout, styled_system_1.justifyContent, styled_system_1.justifyItems, styled_system_1.alignItems, styled_system_1.alignContent, styled_system_1.justifySelf, styled_system_1.alignSelf, function (_a) {
    var _b = _a.display, display = _b === void 0 ? 'grid' : _b;
    return css_1.default({
        display: display,
    });
});
