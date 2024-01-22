import UserModel from "../model/users.model.js";

const isValidUser = async (req,res,next) => {
    try {
        //check if there is user ID in request
        const userId = req.params.id || req.body.id || req.body._id
        if (!userId) throw {
            status: 404,
            message: "user ID is required"
        }
        
        //check if user is valid
        const user = await UserModel.findById({ _id :userId})
        if(!user) throw {
            status: 402,
            message: 'user not found',
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

export {isValidUser}