module.exports = function(application){
    application.get('/contato', function(req,res){
        res.render("contato/contato", {validate:{}, contato:{}});    ;
    });

    application.post('/contato/salvar',function(req,res){
        let contato = req.body;

        req.assert('nome','O nome deve conter entre 5 e 30 caracteres').len(5,30);
        req.assert('email','email deve ser um email valido').isEmail();
        req.assert('ddd','ddd deve conter apenas 2 digitos').len(2,2);
        req.assert('telefone','O telefone deve conter 8 ou 9 digitos').len(8,9);
        req.assert('mensagem','A mensagem deve connter entre 10 e 250 caracteres').len(10,250);
      
        let error = req.validationErrors();
        
        console.log(error);

        if(error){
            res.render("./contato/contato", { validate: error, contato : contato });
            return true;
        }

        let connection = application.config.dbConnection();
        let contatoModel = new application.app.models.contatosDAO(connection);

        contatoModel.salvarContato(contato ,function(error, result){
            res.redirect('/contato');
        });
        
        //res.send(contato);
    });
}