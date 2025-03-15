const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/users.model')

const AuthRoute = express.Router()

AuthRoute.post('/signup', async(req,res)=>{
    try {
        const {username,email,password} = req.body
        const isExistingUser = await User.findOne({email})
        if(isExistingUser){
            return res.status(404).json({massage:'User already regrister please login'})
        }
        const hashpassword = await bcrypt.hash(password,10)
        await User.create({username,email,password:hashpassword})
        res.status(201).json({massage:'Regrister Successfully'})



    } catch (error) {
        res.status(500).json({massage:'somthing went wrong try again later'})
    }
})

AuthRoute.post('/login', async(req,res)=>{ //Authmiddleware
    try {
        const {email,password} = req.body
    
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({massage:'User not found sign in first'})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(404).json({massage:'Enter Correct Password'})
        }
        
        const token = jwt.sign({UserInfo:user},'secretkey')
        res.status(200).json({massage:'login successfully', token:token})
    } catch (error) {
        res.status(500).json({massage:'somthing went wrong try again later'})
    }
})



module.exports = AuthRoute