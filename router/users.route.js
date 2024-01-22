import express from 'express';
import {getUser, postUser, deleteAllUsers, updateManyUsers , getUserById, updateUserById, deleteById} from '../controller/users.controller.js'
import { isValidUser } from '../middleware/users.middleware.js';

// Tạo một cái router và export được để index.js có thể truy cập được
const userRouter = express.Router();

userRouter
        .route('/')
        .get(getUser)
        .post(postUser)
        .put(updateManyUsers)
        .delete(deleteAllUsers)

userRouter
        .route('/:id')
        .all(isValidUser)
        .get(getUserById)
        .post()
        .put(updateUserById)
        .delete(deleteById)       

export {userRouter}