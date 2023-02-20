const mongoose = require("mongoose");
const db = require("./index.js");

const AccountSchema = new mongoose.Schema({
  email: {type:String,
  required:true,
  unique:true},
  phoneNumber: {type:Number,
    required:true,
    unique:true},
  password: {type:String,
    required:true},
    firstName:String,
    lastName:String,
    verified:Boolean,
    balance:Number,
    history:[],
    pdp:String
});
const Account=mongoose.model("Account",AccountSchema)
module.exports={
    Account
}