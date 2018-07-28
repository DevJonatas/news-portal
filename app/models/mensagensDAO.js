function mensagensDAO(connection){
    this._connection = connection;
}

mensagensDAO.prototype.getMensagens = function(callback){
    this._connection.query('SELECT * FROM contato ORDER BY data DESC', callback);
}

module.exports = function(){
   return mensagensDAO;     
}