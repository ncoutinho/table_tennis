var mongoose = require('mongoose');
RegExp.quote = require("regexp-quote");

var scoreSchema = mongoose.Schema({ playerA: Number,
    playerB: Number,
    createdOn: { type: Date, 'default': Date.now },
    updatedOn: Date });

var Score = mongoose.model('Score', scoreSchema);


module.exports = function (dbURI) {
    if (mongoose.connection.readyState != 2) {
        var connectionURI = dbURI || 'mongodb://localhost/table_tennis';
        mongoose.connect(connectionURI);
    }

    return {
        add: function (scoreDetails, callback) {
            var score = new Score(scoreDetails);
            score.save(function (err, savedScore) {
                callback(err, savedScore);
            });
        }
    }
};
