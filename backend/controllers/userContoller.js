
import Users from "../models/Users.js"
import { createError } from "../utility/customError.js";

/**
 * @method GET
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

/**
 * @method POST
 * @route "api/v1/user"
 * @purpose GET ALL USERS
 */

export const registerUser = async (req, res, next) => {

    try {

        const {first_name,
        last_name,
        email,
        phone,
        password} = req.body

        if (!first_name, !last_name, !email, !phone, !password) {

            return next(createError(401, 'All Fields Are Required!'))
            
        }

        // get user with same email
        const existingUser = await Users.findOne({email})

        if (existingUser) {
            return next(createError(401, 'Account Already Exist Please Login!'))

        }

        // Create Unique User
        const user = await Users.create({
            ...req.body,
        })

    } catch (error) {
        
    }
}