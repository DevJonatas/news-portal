module.exports = function(application){
    application.get('/cadastro_noticia',function(req,res){
        application.app.controllers.admin.cadastroNoticia(application,req,res);
    });

    application.post('/noticias/salvar',function(req,res){
        application.app.controllers.admin.salvarNoticia(application,req,res);        
    });

    application.get('/mensagens', (req,res)=>{
        application.app.controllers.admin.mensagens(application,req,res);
    });
}