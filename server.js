const express = require('express');
const connectDb = require ('./Config/connectDb');
const app = express () ; 
require ('dotenv').config ();
const route = require('./Routes/auth');

connectDb () ;

app.use ('/api' , route);
app.use (express.json ()) ;


const PORT = 3000 ;

app.listen (PORT , (err) => 
err ? console.log (err) : console.log(`the app is running on port : ${PORT}`) 
);
