const express = require("express");
const db=require("./dataBase-mongo")
const bankRoutes=require('./routes/bank.routes')

const app = express();
const PORT =5000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
db()
app.use("/bank", bankRoutes);

app.listen(PORT, function () {
  console.log("listening on port 5000!");
});