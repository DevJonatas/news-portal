function Noticias(connection){
    this._connection = connection;
}

Noticias.prototype.getNoticias = function (callback) {
    this._connection.query('SELECT * FROM noticias', callback);
}

Noticias.prototype.getNoticia = function (callback) {
    this._connection.query('SELECT * FROM noticias WHERE id=1', callback);
}

Noticias.prototype.salvarNoticia = function(noticia,callback){
    this._connection.query("INSERT INTO noticias (titulo, noticia, data) VALUES (?,?,?)",
        [noticia.titulo, noticia.noticia, noticia.data], callback);
}

module.exports = function(){
    return Noticias;
}

/*
module.exports = function(){

    this.getNoticias = function(connection, callback){
        connection.query('SELECT * FROM noticias', callback);
    }

    this.getNoticia = function(connection, callback){
        connection.query('SELECT * FROM noticias WHERE id=1',callback);
    }

    this.salvarNoticia = function(noticia ,connection, callback){
        connection.query("INSERT INTO noticias (titulo,noticia,data) VALUES (?,?,?)",
        [noticia.titulo, noticia.noticia, noticia.data] , callback);

    }
    return this;
}

*/