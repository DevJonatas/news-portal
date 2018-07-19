module.exports = function(application){
 
    application.get('/cadastro_noticia',function(req,res){
        res.render("admin/cadastro_noticia");
    });

    application.post('/noticias/salvar',function(req,res){
        let noticia = req.body;

        let connection = application.config.dbConnection();
        let noticiaModel = new application.app.models.noticiasModel(connection);

        noticiaModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
    });
}