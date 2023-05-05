const mongoose = require("mongoose");
const mongoUri = "mongodb+srv://benamoroussema339:root@cluster0.zdhbsej.mongodb.net/bank";
mongoose.set('strictQuery', true)


const db = async () => {
   mongoose.connect(mongoUri,
    { useUnifiedTopology: true, useNewUrlParser: true });
  console.log("db connected")
}

module.exports = db