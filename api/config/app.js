var morgan = require('morgan');
var bodyParser = require('body-parser');
var config = require('./index.js');
var mongoose = require('mongoose');

module.exports = function (app) {
    app.use(morgan('dev'));

    mongoose.connect(config.db);

    app.use(bodyParser.urlencoded({'extended':'true'}));

    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse

    app.listen(config.port);

    console.log('server listening on port ' + config.port);
};