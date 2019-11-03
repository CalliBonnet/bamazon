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

    getAllProducts(); 
}); 

//this is gettinng all of the data from the databade and will display it in your node 
function getAllProducts() {
    connection.query("SELECT * FROM products; ", function(error, results){
        if(error) {
            throw error; 
        }

        console.log(results); 

        connection.end(); 
    });
}; 




