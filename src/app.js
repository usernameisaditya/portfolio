const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const PORT = process.env.PORT || 3000
const Router = require('./routes/api');
require('./db/conn')

app.use(Router)

const staticPath = path.join('public')// compulsory to use index.css in views 
app.use(express.static(staticPath))

const partialPath = path.join(`${__dirname}/../templates/partials`)
hbs.registerPartials(partialPath)

app.set('view engine','hbs')

const viewPath = path.join(`${__dirname}/../templates/views`)
app.set('views',viewPath)

app.listen(PORT,()=>{
    console.log(`listening to the PORT : ${PORT}`);
})