
// require our modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = 3000


// require the router module
const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');

//create the express app
const app = express();

// configure our server settings
app.set('view engine', 'ejs');

// require the db config module
require('./config/database');

// mount middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// mount the routes with .use()
app.use('/', indexRouter);
app.use('/flights', flightsRouter);

// tell the app to listen
app.listen(port, function() {
    console.log(`Express is listening on ${port}`)
});


