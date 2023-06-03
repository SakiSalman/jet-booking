import jwt from 'jsonwebtoken'


// Create JWT Token Forexport

export const createToken = (payload, exp='360d') => {
    const token = jwt.sign(payload, process.env.JWT_SECRETE, { expiresIn:  exp} )
    return token
}
// Verify Token
export const verifyToken = (token) => {

    const verify = jwt.verify(token, process.env.JWT_SECRETE, (err, decoded) => {
        if (err) {
            return null
        }
        return decoded
    })

    return verify
}