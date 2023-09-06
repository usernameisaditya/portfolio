const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { log } = require('console');
const app = express();

const partialPath = path.join(`${__dirname}/../templates/partials`)
hbs.registerPartials(partialPath)

app.set('view engine', 'hbs')
const viewPath = path.join(`${__dirname}/../templates/views`)
app.set('views',viewPath)

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('*',(req,res)=>{
    res.render('404')
})

console.log(__dirname);

let PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`listening at the port http://localhost:${PORT}`);
})
