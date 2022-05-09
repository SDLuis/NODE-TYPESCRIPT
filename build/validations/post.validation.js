"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
const validationType = __importStar(require("../utils/utils"));
const parseTitle = (tittleFromRequest) => {
    if (!validationType.isString(tittleFromRequest)) {
        throw new Error('incorrect or missing tittle');
    }
    return tittleFromRequest;
};
const parseBody = (bodyFromRequest) => {
    if (!validationType.isString(bodyFromRequest)) {
        throw new Error('incorrect or missing body');
    }
    return bodyFromRequest;
};
const parseCategory = (categoryFromRequest) => {
    if (!validationType.isString(categoryFromRequest) || !validationType.isCategory(categoryFromRequest)) {
        throw new Error('incorrect or missing category');
    }
    return categoryFromRequest;
};
const toNewPostEntry = (object) => {
    const newPost = {
        category: parseCategory(object.category),
        title: parseTitle(object.title),
        body: parseBody(object.body)
    };
    return newPost;
};
exports.default = toNewPostEntry;
