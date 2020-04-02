"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _1 = require("./");
exports.default = {
    title: 'Position',
    component: _1.Position,
};
exports.general = function () { return (<_1.Position position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={100}>
    position
  </_1.Position>); };
