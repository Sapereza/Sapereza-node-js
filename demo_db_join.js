//You can combine rows from two or more tables, based on a related column between them, by using a JOIN statement.
//
// Consider you have a "users" table and a "products" table:

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "msimbo1",
    password: "Polwac9!",
    database: "mydb" //the database^
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

//Note: You can use INNER JOIN instead of JOIN. They will both give you the same result.


//MAKE THESE TABLES
//Consider you have a "users" table and a "products" table:
//
// users
// [
//   { id: 1, name: 'John', favorite_product: 154},
//   { id: 2, name: 'Peter', favorite_product: 154},
//   { id: 3, name: 'Amy', favorite_product: 155},
//   { id: 4, name: 'Hannah', favorite_product:},
//   { id: 5, name: 'Michael', favorite_product:}
// ]
// products
// [
//   { id: 154, name: 'Chocolate Heaven' },
//   { id: 155, name: 'Tasty Lemons' },
//   { id: 156, name: 'Vanilla Dreams' }
// ]
// These two tables can be combined by using users' favorite_product field and products' id field.