module.exports.cadastroNoticia = function(application, req,res){
    res.render("admin/formulario_inclusao_noticia", { validate: {}, noticia: {} });
}

module.exports.salvarNoticia = function(application,req,res){
    let noticia = req.body;

    req.assert('titulo', 'O Campo titulo deve conter entre 5 e 30 caracteres').len(5, 30);
    req.assert('resumo', 'O campo resumo deve conter entre 10 e 40 caracteres').len(10,40);
    req.assert('autor','O campo autor deve ser preenchido').notEmpty();
    req.assert('data', 'Data é obrigatório').notEmpty();
    req.assert('noticia', 'O campo noticia, deve ser preenhcido e conter entre 5 e 250 caracteres').len(5, 250);
    
    let error = req.validationErrors();
    if (error) {
        res.render("admin/formulario_inclusao_noticia", { validate: error, noticia: noticia });
        return true;
    }

    let connection = application.config.dbConnection();
    let noticiaModel = new application.app.models.noticiasDAO(connection);

    noticiaModel.salvarNoticia(noticia, function (error, result) {
        res.redirect('/noticias');
    });
}

module.exports.mensagens = function(application, req, res){

    let connection = application.config.dbConnection();
    let mensagensModel = new application.app.models.mensagensDAO(connection);
    
    mensagensModel.getMensagens(function(error, result){
        if(error == null){
            res.render("admin/mensagens", { mensagens : result });
        }else{
            res.send("Error");
        }
    });
}
