//You can delete records from an existing table by using the "DELETE FROM" statement:

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "msimbo1",
    password: "Polwac9!",
    database: "mydb" //the database^
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});

//The values of the properties can be displayed like this:
//
// Example
// Return the number of affected rows:
//
// console.log(result.affectedRows)
// Which will produce this result:
//
// 1