const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs')
const mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({extended : false}));
const routes = require('./routes/app.routes')

app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , ejs);


app.use('/' , routes)

mongoose.connect('mongodb+srv://jayasuryaj36:Surya@cluster0.opnzgjd.mongodb.net/?retryWrites=true&w=majority').then(() =>{
    console.log("Connected to database successfully");
})

app.listen(3000 , () =>{
    console.log("port listening to the port 3000");
})