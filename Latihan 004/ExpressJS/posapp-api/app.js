const express = require('express');
require('dotenv').config();
const app = express();
const connection = require('./src/helper/mysql');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./src/routes/index');//mengambil argumen untuk method get, post, put, delete.

connection.connect(function(error){
    if(error) throw error; //error handling
    console.log('Database has connected!');
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', routes); //root routes

app.listen(3000, function(){
    console.log('posapp-api running at port 3000!');
});
