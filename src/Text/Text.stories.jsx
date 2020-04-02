"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _1 = require("./");
exports.default = {
    title: 'Text',
    component: _1.Text,
};
exports.general = function () { return (<_1.Text textColor="#333" fontSize="2rem">text</_1.Text>); };
