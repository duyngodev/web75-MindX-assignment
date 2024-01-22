import UserModel from '../model/users.model.js'

const getUser = async (req,res)=>{
    try {
        const user = await UserModel.find() 
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

const postUser = async (req, res) => {
    try {
        const newUser = await UserModel.create(req.body)
        res.status(201).send(newUser)
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error')
    }
}
const deleteAllUsers = async (req, res) => {
    await UserModel.deleteMany({})
    res.status(209).send("all users deleted successfully")
}

const updateManyUsers = async (req, res) => {
    try {
        const query = req.query
        await UserModel.updateMany(query,{$set: req.body})
        res.status(200).send("successfully updated with")
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error')
    }
}

const getUserById = async (req,res)=>{
    try {
        const user = await UserModel.findById({
            _id:  req.params.id
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

const updateUserById = async (req,res) =>{
    try {
        const user = await UserModel.updateOne({_id: req.params.id},{$set:req.body})
        res.status(200).send({
            //data: user,            //this line of code will response an object contains update operation like acknowledge, modifiedcount ... 
            message: 'Update user successfully',
            success: true
        })
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error')
    }
}

const deleteById = async (req,res) =>{
    try {
        const user = await UserModel.findByIdAndDelete({_id:req.params.id})
        res.status(200).send({
            message: 'Delete user successfully',
            success: true
        })
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error')
    }
}

export {getUser, postUser , updateManyUsers, deleteAllUsers, getUserById, updateUserById, deleteById}