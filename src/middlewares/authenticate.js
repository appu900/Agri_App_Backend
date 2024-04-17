const passport = require("passport");

exports.authenticate = (request, response, next) => {
  passport.authenticate("jwt", (err, user) => {
    if (err) next(err);
    if (!user) {
      return response.status(401).json({
        message: "Unauthorized Accesss",
      });
    }
    request.user = user;
    next();
  })(request, response, next);
};

// ** middleware for cheking authentication provided by Passportjs
