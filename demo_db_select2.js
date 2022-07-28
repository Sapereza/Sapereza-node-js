//To select only some of the columns in a table, use the "SELECT" statement followed by the column name.

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
        console.log(result);
    });
});


//As you can see from the result of the example above, the result object is an array containing each row as an object.
//
// To return e.g. the address of the third record, just refer to the third array object's address property:
//
//For the console VV
//Example
// Return the address of the third record:
//
// console.log(result[2].address);
//
//Which will produce this result:
//
// Apple st 652