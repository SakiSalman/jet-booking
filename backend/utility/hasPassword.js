import bcrypt from 'bcryptjs'



export const hasPass = async (pass) => {

    const hasPass = await bcrypt.hash(pass, 10)
    return hasPass
}