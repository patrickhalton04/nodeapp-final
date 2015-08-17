/**
 * Created by patrickhalton on 8/16/15.
 */
var express = require('express');
var exphbs  = require('express-handlebars');

var port = process.env.PORT || 4000;

var app = express();

var db = require('./config/db');

app.use('/www',express.static('www'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {

    res.render('about');

});

app.get('/resume', function (req, res) {

    res.render('resume');

});


console.log('listening on port:',port);
app.listen(port);