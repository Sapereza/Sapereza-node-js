//To create a database in MySQL, use the "CREATE DATABASE" statement:
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "msimbo1",
    password: "Polwac9!"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});
//Run "demo_create_db.js"
//Which will give you this result:
//
// Connected!
// Database created