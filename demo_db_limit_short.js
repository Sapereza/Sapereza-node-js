//You can also write your SQL statement like this "LIMIT 2, 5" which returns the same as the offset example above:

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "msimbo1",
    password: "Polwac9!",
    database: "mydb" //the database^
});

con.connect(function(err) {
    if (err) throw err;
    //Return 5 customers, starting from position 2:
    con.query("SELECT * FROM customers LIMIT 2, 5", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});


//Note: The numbers are reversed: "LIMIT 2, 5" is the same as "LIMIT 5 OFFSET 2"