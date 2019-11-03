let mysql = require("mysql"); 

//varibles required to oconnect to the database 
let connection = mysql.createConnection({
   
    host: "localhost", 
    port: 3306, 
    user: "root", 
    password: "Cbonnet20!", 
    database: "bamazon_db"
}); 

//making the connection 
connection.connect(function (error) {
    if(error) {
        throw error; 
    }


    console.log("success! Your database is connected")
}); 