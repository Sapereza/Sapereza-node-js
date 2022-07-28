//To fill a table in MySQL, use the "INSERT INTO" statement.

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "msimbo1",
    password: "Polwac9!",
    database: "mydb" //the database^
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});