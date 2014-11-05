var express = require('express');
var app = express();

// app set up
app.use(express.static(__dirname + './../public'));
require('./config/app')(app);

var userRoute = require('./routes/user')(express.Router());


app.get('/', function(req, res){
        res.sendfile('./public/index.html');
});

app.use('/api', userRoute);