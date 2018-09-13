var mongoose = require('mongoose');
 var StopwatchSchema = new mongoose.Schema({
     time: String,
  
 });
 module.exports = mongoose.model('Stopwatch', StopwatchSchema);