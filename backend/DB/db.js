import mongoose from 'mongoose'



// create mongodb connection

const mongoConnection =async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_STRING}`)
        console.log(`Mongo DB Connected Success`.bgCyan.black);
    } catch (err) {
        console.log(err);
        console.log(`'MONGO CONNECTION ERROR'`.bgRed.black);
    }
}

export default mongoConnection