const express = require("express")
const router = express.Router()
const User = require('../models/user')
const { signup } =require('../controller/auth')
const { signin } =require('../controller/auth')
const { requireSignin } =require('../controller/auth')
router.post('/signin', signin)

router.post('/signup', signup)
// router.post('/profile', requireSignin, (req,res) => {

//     res.status(200).json({ user : 'profile' })
// })





module.exports = router