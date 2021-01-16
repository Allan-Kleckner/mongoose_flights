// require our modules
const mongoose = require ('mongoose');

// set up our shortcut variable
const Schema = mongoose.Schema

// initialize our flightSchema
const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },

    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            const date = new Date();
            const nextYear = date.getFullYear() + 1
            date.setFullYear(nextYear);
            return date;
        }
    },
    
});

module.exports = mongoose.model('Flight', flightSchema);
