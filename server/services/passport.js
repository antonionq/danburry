var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/UserModel');

passport.use(new LocalStrategy(function(username, password, done) {
  User.findOne({ name: username },
    function(err, user) {
    if (err) done(err)
    if (!user) return done(null, false, {message: 'Incorrect Username'})
    if (!user.verifyPassword(password)) return done(null, false)
    return done(null, user, {message: 'Incorrect Password'})

  })

  // .exec(function(err, user) {
  //   // console.log('user strategy', user)
  //   if(err) done(err);
  //   if(!user) return done(null, false, {message: 'Incorrect Username'});
  //   if(user.verifyPassword(password)) return done(null, user);
  //   return done(null, false, {message: 'Incorrect Password'});
  // })
  //
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log(1212121212, id)
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
