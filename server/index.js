const express = require("express");
const db=require("./dataBase-mongo")
const bankRoutes=require('./routes/bank.routes')

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/bank", bankRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});