const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

const comunidadRouter = require('./routes/comunidad');

    //Setings 
app.set('port', 3000);
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));

    //Middlewares
app.use(morgan('dev'));

    //Routes
app.use(require('./routes/index.js'));
require('./routes/comunidad')(app);

    //Statics
app.use(express.static(path.join(__dirname, 'public')));

    //404 Handle Error
app.use((req, res, next)=>{
    res.status(404).send('404 Page no found');
});

let connection = mysql.createConnection({
    host: 'localhost',          
    user: 'root',             
    password: '',
    database: 'lucaPlatform',
    port: '3306'
});

    //Conection Mysql
connection.connect((err)=>{
    if(err){
        throw err
    }else{
        console.log('Connection success');
    }
});

module.exports = app;