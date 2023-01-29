const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

const protect = asyncHandler( async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.header.authorization.split(' ')[1]

            // Verify Token
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')

        } catch(error) {
            console.log(error)
            res.status(400)
            throw new Error('Not authorized')
        }
    }

    if (!token) {
        res.status(400)
        throw new Error('Invalid Token')
    }
})

module.exports = {
    protect
}