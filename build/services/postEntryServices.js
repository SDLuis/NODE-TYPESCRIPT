"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPost = exports.findByIdNoComments = exports.findById = exports.getPostWithoutComments = exports.getPost = void 0;
const post_json_1 = __importDefault(require("./post.json"));
const posts = post_json_1.default;
const getPost = () => posts;
exports.getPost = getPost;
const getPostWithoutComments = () => {
    return posts.map(({ id, category, title }) => {
        return {
            id,
            category,
            title
        };
    });
};
exports.getPostWithoutComments = getPostWithoutComments;
const findById = (id) => {
    const post = posts.find(d => d.id == id);
    return post;
};
exports.findById = findById;
const findByIdNoComments = (id) => {
    const post = posts.find(d => d.id == id);
    if (post != null) {
        const { body } = post, postWithoutComments = __rest(post, ["body"]);
        return postWithoutComments;
    }
};
exports.findByIdNoComments = findByIdNoComments;
const addPost = (newPostEntry) => {
    const newPost = Object.assign({ id: Math.max(...posts.map(d => d.id)) + 1 }, newPostEntry);
    posts.push(newPost);
    return newPost;
};
exports.addPost = addPost;
