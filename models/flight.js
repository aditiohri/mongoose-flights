const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
        min: 0
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    }
}, {timestamps: true});

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    arrival: {
        type: Date,
    }
}, {timestamps: true});

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
        default: Date.now() + (366*24*60*60*1000)
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        default: 'SAN'
    },
    destinations: [destinationSchema],
    ticket: [ticketSchema]
}, {timestamps: true});

module.exports = mongoose.model('Flight', flightSchema);