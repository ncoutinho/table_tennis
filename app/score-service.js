var ScoreProvider = require('../app/score-provider');
var scoreProvider = new ScoreProvider();

module.exports = function () {
    return {

        add: function (req, res) {
            var scoreDetails = {playerA: req.param('playerA'), playerB: req.param('playerB')};

            scoreProvider.add(scoreDetails, function (err, score) {
                res.json({
                    _id: score._id.toString(),
                    playerA: score.playerA,
                    playerB: score.playerB
                });
            });
        },

        welcomeMessage: function (req, res) {
            res.json({ message: 'Table Tennis score service API' });
        }
    }
};
