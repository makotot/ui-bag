"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _1 = require("./");
exports.default = {
    title: 'Box',
    component: _1.Box,
};
exports.general = function () { return (<_1.Box backgroundColor="#333" color="#fff" p="1rem" border="4px solid #666">
    box
  </_1.Box>); };
