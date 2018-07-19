module.exports = function(application){
    
    application.get('/noticia', function(req,res){
        
        let connection = application.config.dbConnection();
        let noticiaModel = new application.app.models.noticiasModel(connection);

        noticiaModel.getNoticia(function(error, result){
            res.render('noticias/noticia',{noticia : result});
            
        });
    });
}