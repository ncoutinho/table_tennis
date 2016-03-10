var ScoreService = require('./score-service')();
var corsMiddleware = require('./middleware/cors')();

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();
var port = process.env.PORT || 8005;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app = corsMiddleware.allowCors(app);

router.get('/', ScoreService.welcomeMessage);

router.post('/score/', ScoreService.add);

app.use('/api', router);

app.listen(port);

module.exports = app;
