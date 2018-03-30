var mongoose = require('mongoose');

var User = mongoose.model('User',{
  email:{
    type:String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {User};

// var newUser = new User({
//   email: "himanshu12792@gmail.com   ",
//
// });

// newUser.save().then((doc) =>{
//   console.log('User save', doc);
// }, (err) => {
//   console.log("Error, Unable to save User", err);
// });
