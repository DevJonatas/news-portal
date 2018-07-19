module.exports = function(){

    this.getNoticias = function(connection, callback){
        connection.query('SELECT * FROM noticias', callback);
    }

    this.salvarNoticia = function(noticia ,connection, callback){
        connection.query("INSERT INTO noticias (titulo,noticia,data) VALUES (?,?,?)",
        [noticia.titulo, noticia.noticia, noticia.data] , callback);

    }
    return this;
}