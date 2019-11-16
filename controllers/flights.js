var Flight = require('../models/flight');

module.exports = {
    index,
    create,
    new: newFlight
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights', {flights});
    });
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('flights');
    });
}

function newFlight(req, res) {
    var flight = new Flight(req.body);
    res.render('flights/new');
}
