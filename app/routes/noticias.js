module.exports = function(application) {

    application.get('/noticias', function (req, res) {
        application.app.controllers.noticia.noticias(application,req,res);

    });

    application.get('/noticia', function (req, res) {
        application.app.controllers.noticia.noticia(application,req,res);
    });
}