function Contatos(connection){
    this._connection = connection;
}

Contatos.prototype.getContatos = function (callback) {
    this._connection.query('SELECT * FROM contato', callback);
}

Contatos.prototype.salvarContato = function (contato, callback) {
    this._connection.query("INSERT INTO contato VALUES (?,?,?,?,?)",
        [contato.nome, contato.email, contato.ddd, contato.telefone, contato.mensagem], callback);

    //console.log(contato);
}

module.exports = function(){
    return Contatos;
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