const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'iLUVmFrlF<3',
  database : 'projectdb'
}).promise()
connection.connect().then(()=>console.log('db connected')).catch(err=>console.log("db err: ",err))
module.exports = connection;