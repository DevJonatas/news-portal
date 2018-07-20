module.exports = function(application){
 
    application.get('/cadastro_noticia',function(req,res){
        res.render("admin/cadastro_noticia");
    });

    application.post('/noticias/salvar',function(req,res){
        let noticia = req.body;

        req.assert('titulo','O titulo deve ser preenchido').notEmpty();

        let error = req.validationErrors();

        if(error){
            res.render("admin/cadastro_noticia");
            return true;
        }

        let connection = application.config.dbConnection();
        let noticiaModel = new application.app.models.noticiasDAO(connection);

        noticiaModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
    });
}