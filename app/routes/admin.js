module.exports = function(application){
 
    application.get('/cadastro_noticia',function(req,res){
        res.render("admin/cadastro_noticia", {validate:{}, noticia:{}} );
    });

    application.post('/noticias/salvar',function(req,res){
        let noticia = req.body;

        req.assert('titulo','O Campo titulo deve conter entre 5 e 30 caracteres').len(5,30);
        req.assert('noticia','O campo noticia, deve ser preenhcido e conter entre 5 e 250 caracteres').len(5,250);
        req.assert('data', 'Data é obrigatório').notEmpty();

        let error = req.validationErrors();
        console.error(error);
        if(error){
            res.render("admin/cadastro_noticia", {validate : error, noticia : noticia});
            return true;
        }

        let connection = application.config.dbConnection();
        let noticiaModel = new application.app.models.noticiasDAO(connection);

        noticiaModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
    });
}