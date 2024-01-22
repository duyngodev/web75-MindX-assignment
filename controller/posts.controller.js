import PostModel from "../model/posts.model.js";

const getPost = async (req,res)=>{
    try {
        const user = await PostModel.find({}) 
        res.status(200).send({
            data: user,
            message:'Get data successfully',
            success: true
        })
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error')
    }
}

const postPost = async (req, res) => {
    try {
        const newPost = await PostModel.create(req.body)  // Cannot use insertOne because the syntax required is : db.collection.insertOne not from Model.
        res.status(201).send(newPost)
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error')
    }
}

const getPostById = async (req,res)=>{
    try {
        const user = await PostModel.findById({
            _id: req.params.id
        }) 
        res.status(200).send({
            data: user,
            message: 'Get data successfully',
            success: true
        })
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error')
    }
}

const updatePostById = async (req,res) =>{
    try {
        const user = await PostModel.updateOne({_id: req.params.id},req.body)
        res.status(200).send({
            message: 'Update post successfully',
            success: true
        })
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error')
    }
}

const deleteById = async (req,res) =>{
    try {
        const user = await PostModel.findByIdAndDelete({_id: req.params.id},req.body)
        res.status(200).send({
            message: 'Delete post successfully',
            success: true
        })
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error')
    }
}

export {getPost, postPost ,getPostById, updatePostById, deleteById}