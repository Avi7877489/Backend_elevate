const mongoose = require('mongoose')
require('dotenv').config()

const ConnectDb = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log('Database Connected Successfully')
    } catch (error) {
        console.error('Database connecting error', error)
    }
}

module.exports = ConnectDb