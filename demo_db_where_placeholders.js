//If you have multiple placeholders, the array contains multiple values, in that order:


var con = mysql.createConnection({
    host: "localhost",
    user: "msimbo1",
    password: "Polwac9!",
    database: "mydb" //the database^
});

con.connect(function(err) {
    if (err) throw err;
    var name = 'Amy';
    var adr = 'Mountain 21';
    //Escape the name and the address values:
    var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    //Send an array with value(s) to replace the escaped values:
    con.query(sql, [name, adr], function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});