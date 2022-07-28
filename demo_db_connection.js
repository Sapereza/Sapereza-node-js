//Use SQL statements to read from (or write to) a MySQL database. This is also called "to query" the database.
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "msimbo1",
    password: "Polwac9!"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!"); //The query method takes an sql statements as a parameter and returns the result.
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
});