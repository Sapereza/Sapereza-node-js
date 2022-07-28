//If the the table you want to delete is already deleted, or for any other reason does not exist, you can use the IF EXISTS keyword to avoid getting an error.

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "msimbo1",
    password: "Polwac9!",
    database: "mydb" //the database^
});

con.connect(function(err) {
    if (err)throw err;
    var sql = "DROP TABLE IF EXISTS customers";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});


//If the table exist, the result object will look like this:
//
// {
//   fieldCount: 0,
//   affectedRows: 0,
//   insertId: 0,
//   serverstatus: 2,
//   warningCount: 0,
//   message: '',
//   protocol41: true,
//   changedRows: 0
// }
// If the table does not exist, the result object will look like this:
//
// {
//   fieldCount: 0,
//   affectedRows: 0,
//   insertId: 0,
//   serverstatus: 2,
//   warningCount: 1,
//   message: '',
//   protocol41: true,
//   changedRows: 0
// }
// As you can see the only differnce is that the warningCount property is set to 1 if the table does not exist.