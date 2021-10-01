const mongoose = require("mongoose");

const meetupSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  locationAddress: {
    type: String,
    required: true,
  },
  locationCityStateZip: {
    type: String,
    required: true,
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  timeStart: {
    type: String,
  },
  timeEnd: {
    type: String,
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1578729370305-131f65fbd716?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  },
  description: {
    type: String,
  },
});

module.exports = Meetup = mongoose.model("meetup", meetupSchema);
