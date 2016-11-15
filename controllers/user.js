var User = require('../models/User');


/*
 |--------------------------------------------------------------------------
 | GET /api/me
 |--------------------------------------------------------------------------
 */
exports.createUser = function (req, res, next) {
  var user = new User(req.userData);
  user.save(function (err, result) {
    if (err) {
      res.status(500).send({
        message: err.message
      });
    }
    if(result.status == 'unverified')
      return next();
    else
      res.send({
        token: createJWT(result),
        user : user
      });
  });
};

/*
 |--------------------------------------------------------------------------
 | GET /api/me
 |--------------------------------------------------------------------------
 */
exports.getCurrentUser = function (req, res) {
  User.findById(req.user, function (err, user) {
    res.send(user);
  });
};
/*
 |--------------------------------------------------------------------------
 | PUT /api/me
 |--------------------------------------------------------------------------
 */
exports.updateCurrentUser =  function (req, res) {
  User.findById(req.user, function (err, user) {
    if (!user) {
      return res.status(400).send({
        message: 'User not found'
      });
    }
    user.displayName = req.body.displayName || user.displayName;
    user.email = req.body.email || user.email;
    user.save(function (err) {
      res.status(200).end();
    });
  });
};
