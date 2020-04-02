"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _1 = require("./");
exports.default = {
    title: 'Flex',
    component: _1.Flex,
};
exports.general = function () { return (<_1.Flex justifyContent="center">
    <div>flex</div>
    <div>flex</div>
  </_1.Flex>); };
