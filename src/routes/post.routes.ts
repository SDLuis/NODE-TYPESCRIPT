import express from "express";
import * as postControllers from '../controllers/post.controlles'

const router = express.Router();

router.get('/', postControllers.getPost);

router.get('/:id', postControllers.findPost);

router.post('/add', postControllers.addPost);

export default router;