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