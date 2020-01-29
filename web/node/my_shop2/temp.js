var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  database: "nodejs",
  user: "root",
  password: "mysql",
  port: "3307"
});

con.connect((err)=>{

    if (err) throw err;
    console.log("Connected!"); 
    const email="tkdansg@naver.com";

    var sql = `select * from members where email = '${email}'`;
    
    con.query(sql, (err, result)=>{
        if (err){
            console.log("insert fail", err);
            
        }else{
            if(result[0]){
                console.log("login success");
                console.log(result);
                
            }else{
                console.log("no have email");
                console.log(result);
            }
        }
        con.end();
    });
});
