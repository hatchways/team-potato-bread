const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema(
  {
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = Status = mongoose.model('status', statusSchema);