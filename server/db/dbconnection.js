const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'mydb'
});

connection.connect(err=>{
    if(err){
        return err
    }
    console.log('Connection to database server established');
});
module.exports = connection;