/* HUBUNGKAN KE GLOBAL.JS */
//1.konfigurasikan dengan mysql
//2.hubungkan ke global.js
//3.buat createConnection dengan menggunakan object 'config' dari global.js

const mysql = require('mysql');
const config = require('../config/global');
const connection = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}); 


module.exports = connection;