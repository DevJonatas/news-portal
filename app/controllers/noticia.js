module.exports.noticia = (application, req, res)=>{
    let connection = application.config.dbConnection();
    let noticiaModel = new application.app.models.noticiasDAO(connection);

    noticiaModel.getNoticia(function (error, result) {
        if(error == null){
            res.render('noticias/noticia', { noticia: result });
        }else{
            res.send("Error");
        }
    });
}

module.exports.noticias = (application, req, res)=>{
    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.noticiasDAO(connection);

    noticiasModel.getNoticias(function (error, result) {
        if(error == null) {
            res.render('noticias/noticias', { noticias: result });
        } else {
            res.send("Error");
        }
    });
}