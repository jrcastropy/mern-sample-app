const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')



// @desc Register new user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler( async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({email: email})
    console.log(userExists)

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hashpassword
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    
    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            // pw: user.password,
            token: generateToekn(user.id)

        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler( async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email: email})
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            // pw: user.password,
            token: generateToekn(user.id)

        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

    
})

const generateToekn = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

// @desc Get user data
// @route GET /api/users/data
// @access Public
const getUser = asyncHandler( async (req, res) => {
    res.json({message: "Get User"})
})

module.exports = {
    registerUser,
    loginUser,
    getUser
}