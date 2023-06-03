import jwt from 'jsonwebtoken'


// Create JWT Token Forexport

export const createToken = (payload, exp='360d') => {
    const token = jwt.sign(payload, process.env.JWT_SECRETE, { expiresIn:  exp} )
    return token
}