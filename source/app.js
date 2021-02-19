const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');

const app = express();

const comunidadRouter = require('./routes/comunidad');

    //Setings 
app.set('port', 3000);
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));

    //Middlewares
app.use(morgan('dev'));

    //Routes
app.use(require('./routes/index.js'));
app.use('/comunidad', comunidadRouter);

    //Statics
app.use(express.static(path.join(__dirname, 'public')));

    //404 Handle Error
app.use((req, res, next)=>{
    res.status(404).send('404 Page no found');
});

module.exports = app;