// The purpose of a router is to map

// require your module (express)
const express = require('express');

// create a router object
const router = express.Router();

// require the flight controller 
const flightsCtrl = require('../controllers/flights');



//define your routes 
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
/* router.get('/:id', flightsCtrl.show);*/

/* 
router.post('/:id/destinations', flightsCtrl.addDestination); 
*/

// export your router object
module.exports = router;