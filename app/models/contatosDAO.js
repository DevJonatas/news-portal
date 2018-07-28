function ContatosDAO(connection){
    this._connection = connection;
}

ContatosDAO.prototype.getContatos = function (callback) {
    this._connection.query('SELECT * FROM contato', callback);
}

ContatosDAO.prototype.salvarContato = function (contato, callback) {
    this._connection.query("INSERT INTO contato (nome,email,ddd,telefone,mensagem) VALUES (?,?,?,?,?)",
        [contato.nome, contato.email, contato.ddd, contato.telefone, contato.mensagem], callback);

}

module.exports = function(){
    return ContatosDAO;
}

/*
module.exports = function(){

    this.getContatos = function(connection, callback){
        connection.query('SELECT * FROM contato',callback);
    }

    this.salvarContato = function(connection, contato, callback){
        connection.query("INSERT INTO contato VALUES (?,?,?,?,?)", 
        [contato.nome,contato.email,contato.ddd,contato.telefone,contato.mensagem], callback);

        console.log(contato);
    }

    return this;
}

*/