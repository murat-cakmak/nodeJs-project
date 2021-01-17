var express = require("express");
var app = express();
var PORT = 3000;

var middleware = {
    requireAuthentication : function (req, res, next) {
        console.log('Özel route girildi!!!');
        next();
    }, 
    logger : function (req, res, next) {
        console.log('Logger route girildi!!!');
        next();
    }
}

// app.use(middleware.requireAuthentication);

app.use(express.static(__dirname + '/public'));

app.get('/hakkimizda', middleware.logger, function (req, res) {
    res.send('Hakkımızda Sayfası');
});

app.listen(PORT, function () {
    console.log('Express Server Started!!!');
});