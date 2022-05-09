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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPost = exports.getPostWithoutComments = exports.getPost = exports.findPostWithoutComments = exports.findPost = void 0;
const post_validation_1 = __importDefault(require("../validations/post.validation"));
const postEntry = __importStar(require("../services/postEntryServices"));
const findPost = (req, res) => {
    const post = postEntry.findById(+req.params.id);
    return (post != null)
        ? res.send(post)
        : res.sendStatus(404);
};
exports.findPost = findPost;
const findPostWithoutComments = (req, res) => {
    const post = postEntry.findByIdNoComments(+req.params.id);
    return (post != null)
        ? res.send(post)
        : res.sendStatus(404);
};
exports.findPostWithoutComments = findPostWithoutComments;
const getPost = (_req, res) => {
    res.send(postEntry.getPost());
};
exports.getPost = getPost;
const getPostWithoutComments = (_req, res) => {
    res.send(postEntry.getPostWithoutComments());
};
exports.getPostWithoutComments = getPostWithoutComments;
const addPost = (req, res) => {
    try {
        const newPostEntry = (0, post_validation_1.default)(req.body);
        const addedPostEntry = postEntry.addPost(newPostEntry);
        res.json(addedPostEntry);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
};
exports.addPost = addPost;
