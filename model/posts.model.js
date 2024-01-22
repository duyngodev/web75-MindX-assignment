import mongoose from  'mongoose';

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const PostModel = mongoose.model('post',postSchema)

export default PostModel 