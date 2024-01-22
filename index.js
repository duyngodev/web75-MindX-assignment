import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './router/users.route.js';
import { postRouter } from './router/posts.route.js';

const server = express();

mongoose
    .connect('mongodb+srv://baoduyd17:BaoDuy%402010@cluster0.n4ddvre.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{console.log('MongoDB connect successful')})
    .catch(err=>{console.error('MongoDB connect failed', err)})


server.use(express.json());

//nested Routes
const route = [
    {
        path: '/users',
        router: userRouter
    },
    {
        path: '/posts',
        router: postRouter
    }
]
route.forEach( path => {
    server.use(path.path, path.router)
})


server.listen(3000, ()=>{
    console.log('listening on port 3000')
})
