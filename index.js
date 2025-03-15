const ConnectDb = require('./config/db')
const app = require('./src/app')
require('dotenv').config()




const PORT = process.env.PORT || 8080
app.listen(PORT, async()=>{
    try {
        await ConnectDb()
        console.log(`Server at http://localhost:${PORT}`)
    } catch (error) {
        console.log('Server Connecting error', error)
    }
})