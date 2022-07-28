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
    //Add primary key to an existing table:
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table altered");
    });
});


//When creating a table, you should also create a column with a unique key for each record.
//
// This can be done by defining a column as "INT AUTO_INCREMENT PRIMARY KEY" which will insert a unique number for each record. Starting at 1, and increased by one for each record.
//If the table already exists, use the ALTER TABLE keyword: