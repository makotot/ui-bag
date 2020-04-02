"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = __importDefault(require("@emotion/styled"));
var should_forward_prop_1 = __importDefault(require("@styled-system/should-forward-prop"));
var styled_system_1 = require("styled-system");
var css_1 = __importDefault(require("@styled-system/css"));
exports.Text = styled_1.default('span', {
    shouldForwardProp: should_forward_prop_1.default
})(styled_system_1.typography, styled_system_1.opacity, function (_a) {
    var textColor = _a.textColor;
    return css_1.default({
        color: textColor,
    });
});
