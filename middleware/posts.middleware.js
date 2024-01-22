import PostModel from "../model/posts.model.js";

const isValidPost = async (req,res,next) => {
    try {
        //check if there is post ID in request
        const postId = req.params.id || req.body.id || req.body._id
        if (!postId) throw {
            status: 404,
            message: "Post ID is required"
        }
        
        //check if post is valid
        const post = await PostModel.findById({_id : postId})
        if(!post) throw {
            status: 404,
            massage: 'Post not found',
        }
        
        //exit middleware
        return next()

    } catch (error) {
        return    res.status(error.status || 500).send({
            message: error.message,
            success: false
        })
    }
}

export {isValidPost}