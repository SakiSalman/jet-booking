import jwt from "jsonwebtoken"
import { createError } from "../utility/customError.js"

export const verifyUser = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
     return next(createError(403, 'Unauthorized Token!'))
    }

    const verify = jwt.verify(token, process.env.JWT_SECRETE, (err, decoded) => {
        if (err) {
            next(createError(404, 'Invalid User!'))
        }
    })

    next()
}