module.exports = function(application){
 
    application.get('/cadastro_noticia',function(req,res){
        res.render("admin/cadastro_noticia");
    });

    application.post('/noticias/salvar',function(req,res){
        let noticia = req.body;

        let connection = application.config.dbConnection();
        let noticiaModel = application.app.models.noticiasModel;

        noticiaModel.salvarNoticia(noticia, connection, function(error, result){
            res.redirect('/noticias');
        });

        //res.send(noticia);
    });
    
}