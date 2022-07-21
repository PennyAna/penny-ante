//dependencies
var express = require('express');
var path = require('path');
var http = require('http');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//import routing file for default/index route
var index = require('./server/routes/app');
//remainder of routing files
const userRoutes = require('./server/routes/user');
const locationRoutes = require('./server/routes/location');

//est mongodb connect
mongoose.connect('mongodb://localhost:27017/penny', 
{
  useNewUrlParser: true}, (err, res) => {
    if (err) {
      console.log('Connection failed: '+ err);
    }
    else {
      console.log('Connected to database!');
    }
  });
  

//express instance
var app = express();

//express -> parsers for POST data
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
//express->use Morgan logger
app.use(logger('dev'));

//CORS support
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});

//express->use specified director as root directory for site
app.use(express.static(path.join(__dirname, 'dist/penny')));

//express->map default route ('/') to index
app.use('/', index);
//remainder of routing file/url maps
app.use('/location', locationRoutes);
app.use('/user', userRoutes);

//express->map all non-defined routes to index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/penny/index.html'));
});

//define port address <- express
const port = process.env.PORT || '3000';
app.set('port', port);

//create HTTP server
const server = http.createServer(app);

//server -> listen on provided port
server.listen(port, function() {
    console.log('API running on localhost: '+port)
});