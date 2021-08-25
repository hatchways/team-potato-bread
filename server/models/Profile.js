const mongoose = require("mongoose");

const availableSchema = new mongoose.Schema({
    day:{type:String,required:true},
    timeStart:{type:String,required:true},
    timeEnd:{type:String,required:true}
})
const profileSchema = new mongoose.Schema({
  firstName:{type:String,required:true},
  lastName:{type:String,required:true},
  description:String,
  availability:[availableSchema]
});



module.exports = Profile = mongoose.model("profile", profileSchema);
