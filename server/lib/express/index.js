var application_root = __dirname,
    express = require('express'),
    path = require('path'),
    cons = require('consolidate'),
    // config = require('../configuration'),
    // routes = require('../routes'),
    app = express();

app.engine('html', cons.handlebars);
app.set('view engine', 'html');
app.set('views', 'views');
app.set('port', 3000);
app.use(express.logger());
app.use( express.bodyParser() );
app.use( express.static( path.join( application_root, '../../../client/src/app/') ) );
app.get('/', function(req, res) {
  res.render("index");
});

app.listen(app.get('port'), function() {
  console.log("connected");
});

module.exports = app;
