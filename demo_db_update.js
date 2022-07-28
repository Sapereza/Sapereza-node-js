//You can update existing records in a table by using the "UPDATE" statement:

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "msimbo1",
    password: "Polwac9!",
    database: "mydb" //the database^
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});

//Notice the WHERE clause in the UPDATE syntax:
// The WHERE clause specifies which record or records that should be updated.
// If you omit the WHERE clause, all records will be updated!


//When executing a query, a result object is returned.
//
// The result object contains information about how the query affected the table.
//
// The result object returned from the example above looks like this:
//
// {
//   fieldCount: 0,
//   affectedRows: 1,
//   insertId: 0,
//   serverStatus: 34,
//   warningCount: 0,
//   message: '(Rows matched: 1 Changed: 1 Warnings: 0',
//   protocol41: true,
//   changedRows: 1
// }
// The values of the properties can be displayed like this:
//
// Example
// Return the number of affected rows:
//
// console.log(result.affectedRows)
// Which will produce this result:
//
// 1