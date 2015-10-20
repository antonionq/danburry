var Appointment = require('../models/apptModel');

module.exports = {

  create: function(req, res) {
    Appointment.create(req.body, function(err, result) {
      // console.log(err, result)
      if (err) return res.status(500).json(err);
      return res.json(result);
    });
  },

  read: function(req, res) {
    Appointment.find().sort('apptDate')
    //  Appointment.find().sort({date: -1})
    .exec(function(err, result){
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  destroy: function(req, res) {
    Appointment.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  }

};
