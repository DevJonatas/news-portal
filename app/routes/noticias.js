module.exports = function (application) {

    application.get('/noticias', function (req, res) {
        let connection = application.config.dbConnection();
        let noticiasModel = new application.app.models.noticiasModel(connection);

        noticiasModel.getNoticias(function (error, result) {
            res.render('noticias/noticias', { noticias: result });
           
        });
    });
}