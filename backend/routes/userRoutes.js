const express = require('express')
const router = express.Router()
const { registerUser,
        loginUser,
        getUser } = require('../controller/userController')

const {protect} = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/data', getUser)

module.exports = router