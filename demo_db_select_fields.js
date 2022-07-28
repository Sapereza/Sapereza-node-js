//The third parameter of the callback function is an array containing information about each field in the result.
//Select all records from the "customers" table, and display the fields object:

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "msimbo1",
    password: "Polwac9!",
    database: "mydb" //the database^
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
    });
});


//To return e.g. the name of the second field, just refer to the second array item's name property:
//
// Example
// Return the name of the second field:
//
// console.log(fields[1].name);
// Which will produce this result:
//
// address