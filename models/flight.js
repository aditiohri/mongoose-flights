const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNum: {
        type: Number,
        required: true,
        max: 9999,
        min: 10,
    },
    departs: {
        type: Date,
        default:  function() {
            let today = new Date()
            return new Date(today.setFullYear(today.getFullYear() + 1))
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);