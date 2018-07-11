module.exports = function(application){
    application.get('/contato', function(req,res){
        res.render("contato/contato");
    });

    application.post('/contato/salvar',function(req,res){
        let contato = req.body;
      
        let connection = application.config.dbConnection();
        let contatoModel = application.app.models.contatoModel;

        contatoModel.salvarContato(connection, contato ,function(error, result){
            res.redirect('/contato');
        });
        
        //res.send(contato);
    });
}