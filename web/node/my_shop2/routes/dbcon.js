const mysql=require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    database: "nodejs",
    user: "root",
    password: "mysql",
    port: "3307",
    dateStrings: "date"
});
  
module.exports=con;