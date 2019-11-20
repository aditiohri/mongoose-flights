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
    console.log('req.body: ', req.body);
    console.log('req.params.id: ', req.params.id);
    Ticket.create(req.body, function(err){
        res.redirect(`/flights/${req.params.id}`);
    })
}