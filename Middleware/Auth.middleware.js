const jwt = require('jsonwebtoken')

const Authmiddleware = async(req,res,next)=>{
    try {
        const token = headeres.Authirization.split(' ')[1]

        const decode = jwt.verify(token,'secretkey')
        next()
        
    } catch (error) {
        res.status(500).json({massage:'Somthing went wrong'})
    }
}

module.exports = Authmiddleware