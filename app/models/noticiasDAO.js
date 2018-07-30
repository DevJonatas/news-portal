function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('SELECT * FROM noticias ORDER BY id DESC', callback);
}

NoticiasDAO.prototype.getNoticia = function (id,callback) {
    //console.log(id.id_noticias);
    this._connection.query('SELECT * FROM noticias WHERE id =' + id.id_noticias, callback);
}

NoticiasDAO.prototype.get5ultimasNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY id DESC limit 5',callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia,callback){
    this._connection.query("INSERT INTO noticias (titulo,resumo,autor,noticia,data) VALUES (?,?,?,?,?)",
        [noticia.titulo,noticia.resumo,noticia.autor, noticia.noticia, noticia.data], callback);
}

module.exports = function(){
    return NoticiasDAO;
}