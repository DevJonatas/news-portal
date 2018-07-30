module.exports.index = function(application, req, res){

    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.noticiasDAO(connection);

    noticiasModel.get5ultimasNoticias(function(error, result){
        if(error == null){
            res.render("home/index", { noticia : result });
        }else{
            res.send("Error");
        }
        
    });
}