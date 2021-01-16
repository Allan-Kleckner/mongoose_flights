// require the model
const Flight = require('../models/flight');

// set up module.exports and export your new action
module.exports = {
    index, 
    new: newFlight, 
    create
};

// define the new action (controller function)
function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    Flight.create(req.body, function(err, flight) {
        res.redirect('/flights');
    });
}