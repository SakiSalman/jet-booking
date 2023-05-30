
import Users from "../models/Users.js"

/**
 * @method POST
 * @route "api/v1/user"
 * @purpose GET ALL USERS
 */





export const users = async (req, res, next) => {

    try {
        const user = await Users.find()
        console.log(user);

    } catch (error) {
        
    }
}
export const registerUser = async (req, res, next) => {

    try {
        const user = await Users.create(req.body)

    } catch (error) {
        
    }
}