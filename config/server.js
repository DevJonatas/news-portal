let express = require('express');
let app = express();
let consign = require('consign');

app.set('view engine', 'ejs');
app.set('views','./app/views');

consign()
    .include('app/routes')
    .into(app);

module.exports = app;