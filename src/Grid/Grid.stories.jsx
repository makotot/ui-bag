"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _1 = require("./");
exports.default = {
    title: 'Grid',
    component: _1.Grid,
};
exports.general = function () { return (<_1.Grid gridTemplateColumns="1fr 1fr" gridGap="1rem">
    <div>grid</div>
    <div>grid</div>
  </_1.Grid>); };
