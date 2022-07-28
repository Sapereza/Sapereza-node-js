//If you want to return all users, no matter if they have a favorite product or not, use the LEFT JOIN statement:

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "msimbo1",
    password: "Polwac9!",
    database: "mydb" //the database^
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = products.id";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
