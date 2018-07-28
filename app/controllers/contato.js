module.exports.getContato = function(application, req, res){
    res.render("contato/contato", { validate: {}, contato: {} });;
}

module.exports.salvarContato = function(application, req, res){
    let contato = req.body;

    req.assert('nome', 'O nome deve conter entre 5 e 30 caracteres').len(5, 30);
    req.assert('email', 'email deve ser um email valido').isEmail();
    req.assert('ddd', 'ddd deve conter apenas 2 digitos').len(2, 2);
    req.assert('telefone', 'O telefone deve conter 8 ou 9 digitos').len(8, 9);
    req.assert('mensagem', 'A mensagem deve connter entre 10 e 250 caracteres').len(10, 250);

    let error = req.validationErrors();

    if(error) {
        res.render("./contato/contato", { validate: error, contato: contato });
        return true;
    }

    let connection = application.config.dbConnection();
    let contatoModel = new application.app.models.contatosDAO(connection);

    contatoModel.salvarContato(contato, function (error, result) {    
        if(error == null){
            res.redirect('/mensagens');
        }else{
            res.send("Error");
        }
    });
}