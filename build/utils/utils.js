"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCategory = exports.isString = void 0;
const types_1 = require("../types");
const isString = (string) => {
    return typeof string === 'string';
};
exports.isString = isString;
const isCategory = (param) => {
    return Object.values(types_1.category).includes(param);
};
exports.isCategory = isCategory;
