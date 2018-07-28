let mysql = require('mysql');

let connMySQL = function(){
    return mysql.createConnection({
        host : '',
        user : '',
        password: '',
        database : ''
    });
}

module.exports = function(){
    return connMySQL;
}