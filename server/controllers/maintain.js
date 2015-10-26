var Maintain = require('../models/priceAndTimeModel');

module.exports = {

  create: function(req, res) {
    Maintain.create(req.body, function(err, result) {
      if (err) return res.status(500).json(err);
      return res.json(result);
    });
  },

  read: function(req, res) {
    Maintain.find()
    .exec(function(err, result){
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  update: function(req, res) {
    Maintain.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

};
