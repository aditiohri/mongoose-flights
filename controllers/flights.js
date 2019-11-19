var Flight = require('../models/flight');

module.exports = {
    index,
    create,
    new: newFlight,
    show
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights', {flights});
    });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('flights');
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log('FLIGHT: ', flight);
        res.render('flights/show', {title: ` Flight # ${flight._id}`, flight});
    });
};

function newFlight(req, res) {
    res.render('flights/new', {title: 'New Flight'})
}
// function newFlight(req, res) {
//     let flight = new Flight();
//     let time = flight.departs;
//     let defaultTime = time.slice(0, 16);
//     res.render('flights/new', {defaultTime});
// }

// function newFlight(req, res) {
    
//     var flight = new Flight();
//     var dt = flight.departs;
//     var destDate = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}T${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;
//     res.render('flights/new', {destDate});
// }