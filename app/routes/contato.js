module.exports = function(application){
    application.get('/contato', function(req,res){
        application.app.controllers.contato.getContato(application,req,res);
    });

    application.post('/contato/salvar',function(req,res){
        application.app.controllers.contato.salvarContato(application,req,res);
    });
}