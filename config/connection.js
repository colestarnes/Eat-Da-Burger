var mysql = require("mysql2"); 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
    host: "127.0.0.1", 
    port: 3306, 
    user: process.env.dbUser, 
    password: process.env.dbPass,
    database: "burger_db" 
})
}; 

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack); 
        return;
    } 
    console.log("connected as id " + connection.threadId);
}); 

module.exports = connection; 
