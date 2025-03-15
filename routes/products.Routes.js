const express = require('express')
const Authmiddleware = require('../Middleware/Auth.middleware')
const Product = require('../models/products.model')


const productsRoutes = express.Router()

productsRoutes.post('/add-product',Authmiddleware,async(req,res)=>{
    try {
        const {name,description,price} = req.body
        const product = await Product.create({name,description,price})
        res.status(201).json({massage:'Product created Successfully',product:product})
    } catch (error) {
        res.status(500).json({massage:'Somthing went wrong'})
    }
})


productsRoutes.get('/get-product', async(req,res)=>{
    try {
        const allproduct = await Product.find()
        res.status(200).json(allproduct)
    } catch (error) {
        res.status(500).json({massage:'Somthing went wrong'})
    }
})


module.exports = productsRoutes