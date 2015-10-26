var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
  openTime: { type: String, maxlength: 10},
  closeTime: { type: String, maxlength: 10},
  firstDay: { type: String, maxlength: 10},
  lastDay: { type: String, maxlength: 10},
  haircut1: { type: String, maxlength: 10 },
  haircut2: { type: String, maxlength: 10 },
  haircut3: { type: String, maxlength: 10 },
  haircut4: { type: String, maxlength: 10 },
  haircut5: { type: String, maxlength: 10 },
});

module.exports = mongoose.model('Maintain', schema);
