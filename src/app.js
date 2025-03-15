const express = require('express')
const AuthRoute = require('../routes/authRoutes')
const productsRoutes = require('../routes/products.Routes')
const app = express()


app.use(express.json())


app.get('/', (req,res)=>{
    res.send('Api is working')
})
app.use('/api', AuthRoute)
app.use('/api', productsRoutes)


module.exports = app