import bcrypt from 'bcryptjs'



export default hasPassword = (pass) => {

    const salt = bcrypt.genSalt(10)
    const hasPass = bcrypt.hash(pass, salt)


    return hasPass
}