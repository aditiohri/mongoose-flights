var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res){
    res.render('tickets/new', {flightId: req.params.id});
};

function create(req, res){
    console.log('req.body.flight: ', req.body.flight);
    console.log('req.body: ', req.body);
    req.body.flight = req.params.id;
    console.log('req.body.flight AFTER:', req.body.flight)
    console.log('req.params.id AFTER:', req.params.id)
    Ticket.create(req.body, function(err, ticket){
        console.log('req.body.flight after ticket:', req.body.flight)
        console.log('req.params.id after ticket:', req.params.id)
        console.log('ticket.flight: ', ticket.flight);
        res.redirect(`flights/${ticket.flight}`)
    })
}

// function create(req, res){
//     console.log('req.body: ', req.body);
//     console.log('req.params.id: ', req.params.id);
//     Ticket.create(req.body, function(err){
//         res.redirect(`/flights/${req.params.id}`);
//     })
// }