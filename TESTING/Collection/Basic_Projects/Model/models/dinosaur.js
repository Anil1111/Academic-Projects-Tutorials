const mongoose = require('mongoose');

// const validator = function () {
//   return false;
// };

let DinosaurSchema = new mongoose.Schema({
  name: { type: String, required: true },
  count: {
    type: Number,
    // validate: [validator, 'Cannot hold more than 10 dinosaurs.']
    max: [10, 'Cannot hold more than 10 dinosaurs.']
  },
  risk: String
});

// DinosaurSchema.statics.findByName = function (name, callback) {
//   return this.findOne({ name: name }, callback);
// };
DinosaurSchema.statics.findByName = function (name) {
  return this.findOne({ name: name });
};

DinosaurSchema.methods.breed = function () {
  this.count++;
};

let Dinosaur;
try {
  Dinosaur = mongoose.model('Dinosaur');
} catch (error) {
  Dinosaur = mongoose.model('Dinosaur', DinosaurSchema); // in case the model does not exist then it will create a new model, otherwise it will throw overwrite error with mocha --watch
}

module.exports = Dinosaur;