const express = require('express');
const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({extended:false}))

router.get('/' , (req, res) => {
    res.render('index')
})
router.get('/about' , (req, res) => {
    res.render('about')
})
router.get('/contact' , (req, res) => {
    res.render('contact')
})

/* rendering login page to the requested url : /login */
router.get('/login' , (req, res) => {
    res.render('login')
})

/* login in the user  */
router.post('/login' , (req, res) => {
    res.status(201).send(`Welcome Back, ${req.body.email}`)
})

router.get('/signup' , (req, res) => {
    res.render('signup')
})

router.get('*',(req,res)=>{
   res.redirect('/')
})

module.exports = router