var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
  haircutType: { type: String, maxlength: 40, required: true },
  barber: { type: String, maxlength: 10, required: true },
  apptDate: { type: Date, required: true },
  firstName: { type: String, maxlength: 30, required: true },
  lastName: { type: String, maxlength: 30, required: true },
  phoneNum: { type: String, maxlength: 15 },
  email: { type: String, maxlength: 120, required: true }
});

module.exports = mongoose.model('Appointment', schema);
