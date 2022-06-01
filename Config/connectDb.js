const mongoose = require('mongoose') ; 


const connectDb = async () => {
    try {
        await mongoose.connect (process.env.MONGO_URI)
        console.log ('db is connected with success')
    } catch (error) {
        console.log ({msg: 'Error connecting to mongodb', error})
    }
}


module.exports = connectDb

