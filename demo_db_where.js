//When selecting records from a table, you can filter the selection by using the "WHERE" statement:


var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "msimbo1",
    password: "Polwac9!",
    database: "mydb" //the database^
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});