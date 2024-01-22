import express from 'express';
import {getPost, postPost ,getPostById, updatePostById, deleteById} from '../controller/posts.controller.js'
import { isValidPost } from '../middleware/posts.middleware.js';

// Tạo một cái router và export được để index.js có thể truy cập được
const postRouter = express.Router();

/* 
 * @route GET /posts/
 * @method GET, POST, PUT, DELETE
 */
postRouter
        .route('/')
        .get(getPost)
        .post(postPost)
        .put()
        .delete()

postRouter
        .route('/:id')
        .all(isValidPost)
        .get(getPostById)
        .post()
        .put(updatePostById)
        .delete(deleteById)       

export {postRouter}