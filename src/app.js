const express = require('express')
const AuthRoute = require('../routes/authRoutes')
const app = express()


app.use(express.json())


app.get('/', (req,res)=>{
    res.send('Api is working')
})
app.use('/api', AuthRoute)


module.exports = app