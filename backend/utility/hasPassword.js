import bcrypt from 'bcryptjs'


// Has Password
export const hasPass = async (pass) => {

    const hasPass = await bcrypt.hash(pass, 10)
    return hasPass
}


// Verify Password

export const verifyPass = async (has, pass) => {

    const verify = await bcrypt.compare(pass, has)

    return verify
}