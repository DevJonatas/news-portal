let mysql = require('mysql');

let connMySQL = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'toor',
        database : 'portal'
    });
}

module.exports = function(){
    return connMySQL;
}