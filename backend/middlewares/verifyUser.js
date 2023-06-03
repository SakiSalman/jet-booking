import jwt from "jsonwebtoken"
import { createError } from "../utility/customError.js"
import Users from "../models/Users.js"


// user Verfication
export const isUser = (req, res, next) => {

    if (!req.headers.authorization) {
        return next(createError(403, 'No Token Found!'))
    }
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
     return next(createError(403, 'Unauthorized Token!'))
    }

    const verify = jwt.verify(token, process.env.JWT_SECRETE, (err, decoded) => {
        if (err) {
            next(createError(404, 'Invalid User!'))
        }
        req.decoded = decoded
        next()
    })

}

// Admin Verification
export const isAdmin = async (req, res, next) => {

    const email = req.decoded.email
        const user = await Users.findOne({email})
    if (!user?.isAdmin) {
        return next(createError(401, 'You are not admin!'))
    }
    next()
    
}

